import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../store/auth'

export default function Login(){
  const [email, setEmail] = useState('user@test.com')
  const [password, setPassword] = useState('pass123')
  const [err, setErr] = useState<string | null>(null)
  const { setToken } = useAuth()
  const nav = useNavigate()

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setErr(null)
    try {
      const { data } = await api.post('/api/auth/login', { email, password })
      setToken(data.token); nav('/tickets')
    } catch (e: any) {
      setErr(e.response?.data?.error || 'Login failed')
    }
  }

  return (
    <div className="container" style={{maxWidth:420}}>
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="card">
        <label>Email</label>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        {err && <div className="small" style={{color:'crimson'}}>{err}</div>}
        <button className="btn primary" type="submit" style={{marginTop:12}}>Login</button>
      </form>
      <div className="small">No account? <Link to="/register">Register</Link></div>
    </div>
  )
}
