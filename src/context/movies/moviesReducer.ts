import {
  MoviesActionKind,
  MoviesReducerActions,
  MoviesState,
} from '../../interfaces/movies'

export const moviesReducer = (
  state: MoviesState,
  action: MoviesReducerActions
): MoviesState => {
  const { type, payload } = action

  switch (type) {
    case MoviesActionKind.SET_QUERY:
      return { ...state, query: payload }

    case MoviesActionKind.SET_MOVIES:
      return { ...state, movies: payload }

    case MoviesActionKind.SET_LOADING:
      return { ...state, loading: payload }

    default:
      return state
  }
}
