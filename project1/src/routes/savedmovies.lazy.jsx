import { createLazyFileRoute } from '@tanstack/react-router'
import { requireAuth } from '../services/requireAuth'
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'
import SavedMoviesList from '../components/SavedMovies/SavedMoviesList'
import { useQuery } from '@tanstack/react-query'
import { getSavedMovies } from '../api/getSavedMovies'
export const Route = createLazyFileRoute('/savedmovies')({
  component: SavedMovies,
})

function SavedMovies() {
  requireAuth()
  const { user } = useContext(UserContext);
  const { isLoading, data } = useQuery({
    queryKey:[user],
    queryFn: ()=>getSavedMovies(user.userId),
    staleTime: 3000
  });
  if(isLoading) return <h2 style={{paddingTop: "200px"}}>Loading...</h2>

  return <SavedMoviesList ids={data.rows} />
}
