import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "../components/Home/Home";
export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Index() {
  return (
    <h2>
      Homme ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddGoes
      Here
    </h2>
  );
}
