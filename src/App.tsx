import Header from './components/Header'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies, loading } = useMovies()

  return (
    <div className="container mx-auto">
      <Header />

      <main className="pt-5">
        <Movies movies={movies} isLoading={loading} />
      </main>
    </div>
  )
}

export default App
