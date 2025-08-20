import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../lib/api'
import AuditTimeline from '../components/AuditTimeline'

export default function TicketDetail(){
  const { id } = useParams()
  const [ticket, setTicket] = useState<any>(null)
  const [audit, setAudit] = useState<any[]>([])

  useEffect(()=>{
    async function run(){
      const [t, a] = await Promise.all([
        api.get(`/api/tickets/${id}`),
        api.get(`/api/audit/${id}`)
      ])
      setTicket(t.data); setAudit(a.data)
    }
    run()
  }, [id])

  if (!ticket) return <div>Loading...</div>

  return (
    <div>
      <h2>{ticket.title}</h2>
      <div className="small">Status: <b>{ticket.status}</b> • Category: <b>{ticket.category || '—'}</b></div>
      <div className="card"><pre className="mono">{ticket.description}</pre></div>
      <AuditTimeline items={audit} />
    </div>
  )
}
