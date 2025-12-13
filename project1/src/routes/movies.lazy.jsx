import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute("/movies")({
  component: Movies,
})

function Movies() {
  return <div>Movies goes here</div>
}