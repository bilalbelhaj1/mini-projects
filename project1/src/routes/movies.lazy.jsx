import { createLazyFileRoute } from "@tanstack/react-router";
import Movies from "../components/movies/Movies";
export const Route = createLazyFileRoute("/movies")({
  component: Movies,
});
