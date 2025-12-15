import { createLazyFileRoute } from '@tanstack/react-router'
import { getMovieDetails } from '../api/getMovieDetials';
import { useQuery } from '@tanstack/react-query';
export const Route = createLazyFileRoute('/movieDetails')({
  component: MovieDetails,
})

function MovieDetails() {
  const { id } = Route.useSearch()
  const { isLoading, data } = useQuery({
    queryFn: () => getMovieDetails(id),
    queryKey: [id],
    staleTime: 300000
  })
  if(!isLoading) {
    console.log(data)
  }
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return <div className="movieDetails">The movie details goes here</div>
}
