import { ReactNode, useReducer } from 'react'

import {
  MoviesActionKind,
  MoviesActions,
  MoviesState,
} from '../../interfaces/movies'
import { MoviesContext } from './MoviesContext'
import { moviesReducer } from './moviesReducer'

const INITIAL_STATE: MoviesState = {
  query: '',
  movies: [],
  loading: false,
}

export default function MoviesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(moviesReducer, INITIAL_STATE)

  // actions

  const setQuery: MoviesActions['setQuery'] = query =>
    dispatch({ type: MoviesActionKind.SET_QUERY, payload: query })

  const setMovies: MoviesActions['setMovies'] = movies =>
    dispatch({ type: MoviesActionKind.SET_MOVIES, payload: movies })

  const setLoading: MoviesActions['setLoading'] = isLoading =>
    dispatch({ type: MoviesActionKind.SET_LOADING, payload: isLoading })

  return (
    <MoviesContext.Provider
      value={{
        actions: {
          setQuery,
          setMovies,
          setLoading,
        },
        moviesState: state,
      }}>
      {children}
    </MoviesContext.Provider>
  )
}
