import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Guard from './components/Guard'
import Login from './pages/Login'
import Register from './pages/Register'
import Tickets from './pages/Tickets'
import TicketDetail from './pages/TicketDetail'
import KBList from './pages/KBList'
import KBEditor from './pages/KBEditor'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Guard><Layout /></Guard>}>
        <Route index element={<Navigate to="/tickets" replace />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/:id" element={<TicketDetail />} />
        <Route path="/kb" element={<KBList />} />
        <Route path="/kb/new" element={<KBEditor />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
