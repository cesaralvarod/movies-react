import { ApiResponseMovies } from '../interfaces/movies'

const { VITE_REACT_API_KEY } = import.meta.env

export const searchMovies = async (query: string) => {
  if (query === '') return null

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${VITE_REACT_API_KEY}&s=${query}`
    )
    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie: ApiResponseMovies) => ({
      id: movie?.imdbID,
      title: movie?.Title,
      type: movie?.Type,
      poster: movie?.Poster,
      year: movie?.Year,
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
