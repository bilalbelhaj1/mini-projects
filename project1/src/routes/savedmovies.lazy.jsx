import { createLazyFileRoute } from '@tanstack/react-router'
import { requireAuth } from '../services/requireAuth'
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'
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
  })
  console.log(data);
  if(isLoading) return <h2 style={{paddingTop: "200px"}}>Loading.....</h2>
  return <div style={{background:"red", height:"900px"}} >saved movies goes here</div>
}
