import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'

export default function KBList(){
  const [q, setQ] = useState('payment')
  const [items, setItems] = useState<any[]>([])
  async function search(){ const { data } = await api.get('/api/kb', { params: { query: q } }); setItems(data) }
  useEffect(()=>{ search() }, [])

  return (
    <div>
      <h2>Knowledge Base</h2>
      <div className="card">
        <input className="input" placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn" style={{marginTop:8}} onClick={search}>Search</button>
      </div>
      <ul className="list">
        {items.map(a => (
          <li key={a._id || a.id}>
            <b>{a.title}</b> {a.status && <span className="badge">{a.status}</span>}
            <div className="small">{(a.body || '').slice(0,140)}...</div>
          </li>
        ))}
      </ul>
      <div style={{marginTop:12}}><Link to="/kb/new" className="btn">New Article</Link></div>
    </div>
  )
}
