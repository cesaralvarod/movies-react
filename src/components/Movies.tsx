import { Movie } from '../interfaces/movies'

// ✅ Lista las películas encontradas y muestra el título, año y poster.
function ListOfMovies({ movies }: { movies: Movie[] }) {
  return (
    // <!-- ✅ Haz que las películas se muestren en un grid responsive.-->
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {movies.map(movie => (
        <li key={movie.id}>
          <div className="text-center pb-3">
            <h3>{movie.title}</h3>
            <p className="text-sm">{movie.year}</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={movie.poster} alt={movie.title} />
          </div>
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResult() {
  return <p>Results not found</p>
}

export function Movies({
  movies,
  isLoading,
}: {
  movies: Movie[]
  isLoading: boolean
}) {
  const hasMovies = movies?.length > 0

  if (isLoading) return <p>Loading...</p>

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />
}
