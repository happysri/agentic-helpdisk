import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../lib/api'
import { useAuth } from '../store/auth'

export default function Register(){
  const [name, setName] = useState('User')
  const [email, setEmail] = useState('user+new@test.com')
  const [password, setPassword] = useState('pass123')
  const [err, setErr] = useState<string | null>(null)
  const { setToken } = useAuth()
  const nav = useNavigate()

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setErr(null)
    try {
      const { data } = await api.post('/api/auth/register', { name, email, password })
      setToken(data.token); nav('/tickets')
    } catch (e: any) {
      setErr(e.response?.data?.error || 'Register failed')
    }
  }

  return (
    <div className="container" style={{maxWidth:420}}>
      <h2>Register</h2>
      <form onSubmit={onSubmit} className="card">
        <label>Name</label>
        <input className="input" value={name} onChange={e=>setName(e.target.value)} />
        <label>Email</label>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        {err && <div className="small" style={{color:'crimson'}}>{err}</div>}
        <button className="btn primary" type="submit" style={{marginTop:12}}>Create account</button>
      </form>
      <div className="small">Have an account? <Link to="/login">Login</Link></div>
    </div>
  )
}
