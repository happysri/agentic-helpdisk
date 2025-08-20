import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

export default function Layout() {
  const { logout } = useAuth()
  const nav = useNavigate()
  return (
    <div>
      <header className="header">
        <div style={{ fontWeight: 700 }}>Agentic Helpdesk</div>
        <nav className="nav">
          <NavLink to="/tickets">Tickets</NavLink>
          <NavLink to="/kb">KB</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <button className="btn" onClick={() => { logout(); nav('/login') }}>Logout</button>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}
