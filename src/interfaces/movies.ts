export type ApiResponseMovies = {
  imdbID: string
  Type: string
  Title: string
  Poster: string
  Year: string
}

export interface Movie {
  title: string
  year: string
  id: string
  type: string
  poster: string
}

export enum MoviesActionKind {
  SET_QUERY,
  SET_MOVIES,
  SET_LOADING,
}

type SetQueryReducerAction = {
  type: MoviesActionKind.SET_QUERY
  payload: string
}

type SetMoviesReducerAction = {
  type: MoviesActionKind.SET_MOVIES
  payload: Movie[]
}

type SetLoadingReducerAction = {
  type: MoviesActionKind.SET_LOADING
  payload: boolean
}

export type MoviesReducerActions =
  | SetQueryReducerAction
  | SetMoviesReducerAction
  | SetLoadingReducerAction

export type MoviesState = {
  query: string
  movies: Movie[]
  loading: boolean
}

export type MoviesActions = {
  setQuery: (query: string) => void
  setMovies: (movies: Movie[]) => void
  setLoading: (isLoading:boolean) => void
}
