import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

export default function Guard({ children }: { children: ReactNode }) {
  const { token } = useAuth()
  const nav = useNavigate()
  useEffect(() => { if (!token) nav('/login') }, [token])
  return <>{children}</>
}
