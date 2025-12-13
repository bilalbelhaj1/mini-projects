import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
})

function Index() {
   return <h2>Homme ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddGoes Here</h2>
}