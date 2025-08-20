import { useState } from 'react'

export default function KBEditor(){
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('billing, payments')

  // For the assignment demo, this page is UI-only in this scaffold.
  return (
    <div className="card" style={{maxWidth:720}}>
      <h3>New KB (demo)</h3>
      <input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="input" placeholder="Body" value={body} onChange={e=>setBody(e.target.value)} style={{minHeight:160, marginTop:8}} />
      <input className="input" placeholder="Tags (comma-separated)" value={tags} onChange={e=>setTags(e.target.value)} style={{marginTop:8}} />
      <button className="btn primary" style={{marginTop:8}} disabled>Save (wire later)</button>
      <div className="small" style={{marginTop:6}}>In your final submission, POST to <code>/api/kb</code> (admin only) to create articles.</div>
    </div>
  )
}
