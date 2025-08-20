import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

type Ticket = { _id: string; title: string; status: string; category?: string; createdAt?: string }

export default function Tickets(){
  const [items, setItems] = useState<Ticket[]>([])
  const [title, setTitle] = useState('Refund for double charge')
  const [description, setDescription] = useState('I was charged twice on invoice 1234')
  const [loading, setLoading] = useState(false)

  async function load(){ const { data } = await api.get('/api/tickets'); setItems(data) }
  useEffect(()=>{ load() }, [])

  async function create(e: React.FormEvent){
    e.preventDefault(); setLoading(true)
    try {
      await api.post('/api/tickets', { title, description })
      setTitle(''); setDescription(''); await load()
    } finally { setLoading(false) }
  }

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <h3>Create Ticket</h3>
          <form onSubmit={create}>
            <input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
            <textarea className="input" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} style={{minHeight:100, marginTop:8}} />
            <button className="btn primary" disabled={loading} style={{marginTop:8}}>Create</button>
          </form>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h3>My Tickets</h3>
          <ul className="list">
            {items.map(t => (
              <li key={t._id}>
                <Link to={`/tickets/${t._id}`}><b>{t.title}</b></Link>
                <span className="badge">{t.status}</span>
                {t.category && <span className="badge">{t.category}</span>}
                {t.createdAt && <div className="small">{new Date(t.createdAt).toLocaleString()}</div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
