import { createLazyFileRoute } from '@tanstack/react-router'
import { requireAuth } from '../services/requireAuth'
export const Route = createLazyFileRoute('/savedmovies')({
  component: SavedMovies,
})

function SavedMovies() {
  requireAuth()
  return <div style={{background:"red", height:"900px"}} >saved movies goes here</div>
}
