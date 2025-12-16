import { createLazyFileRoute } from '@tanstack/react-router'
import Register from '../components/auth/Register'
export const Route = createLazyFileRoute('/register')({
  component: Register,
})
