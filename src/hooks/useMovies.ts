import {
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
  useMemo,
} from 'react'

import { MoviesContext } from '../context/movies/MoviesContext'
import { Movie } from '../interfaces/movies'
import { searchMovies } from '../service/movies'

export const useMovies = () => {
  const [error, setError] = useState<null | string>(null)
  const [sort, setSort] = useState<boolean>(false) // TODO: Hacer para tomorrow

  const { moviesState, actions } = useContext(MoviesContext)

  const { movies, query, loading } = moviesState
  const { setQuery, setMovies, setLoading } = actions

  const isFirstInput = useRef<boolean>(true) // <---- ref tambien sirve para las validaciones al renderizar primero
  const previousQuery = useRef<string>(query)
  const previousMovies = useRef<Movie[]>([])

  // useCallback es un useMemo solo y exclusivamente para funciones
  const getMovies = useCallback(async () => {
    if (query === previousQuery.current) return

    setLoading(true)

    try {
      previousQuery.current = query
      const newMovies = await searchMovies(query)
      previousMovies.current = newMovies
      setMovies(newMovies)
    } catch (error) {
      setError((error as Error)?.message)
    } finally {
      setLoading(false)
    }
  }, [query])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : previousMovies.current
  }, [sort, movies])

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (query === '') return setError('Enter a movie to search')
    if (query.startsWith(' ')) return // si query inicia con " " (espacio vacio) no continua escribiendo
    if (query.match(/^\d+$/))
      return setError('There cannot be a number in the entered text')
    if (query.length < 3)
      return setError('The movie must have at least 3 characters')

    setError(null)
  }, [query])

  useEffect(() => {
    setMovies(sortedMovies)
  }, [sort])

  return {
    movies,
    query,
    error,
    sort,
    sortedMovies,
    loading,
    setQuery,
    getMovies,
    setSort,
  }
}
