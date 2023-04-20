import { createContext } from 'react'
import { MoviesActions, MoviesState } from '../../interfaces/movies'

export type MoviesContextProps = {
  actions: MoviesActions
  moviesState: MoviesState
}

export const MoviesContext = createContext<MoviesContextProps>(
  {} as MoviesContextProps
)
