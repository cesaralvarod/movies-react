import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { useMovies } from '../hooks/useMovies'
// ✅ DONE: Necesita mostrar un input para buscar la película y un botón para buscar.

export default function Header() {
  const FORMDATA_INITIAL_STATE: {
    query: string
  } = {
    query: '',
  }

  const { error, sort, setQuery, getMovies, loading, setSort } = useMovies()

  const { formData, handleSubmit, handleInputChange } = useForm(
    FORMDATA_INITIAL_STATE,
    () => {
      getMovies()
    }
  )

  useEffect(() => {
    setQuery(formData.query)
  }, [formData.query])

  const handleSort = () => setSort(!sort)

  return (
    <header>
      <h1 className="pb-3">Movies App</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            name="query"
            onChange={handleInputChange}
            placeholder="The Whale, Avengers, The Matrix..."
            className="inline w-[400px]"
          />

          <button
            type="submit"
            className="bg-teal-300 hover:bg-teal-400 font-bold uppercase"
            disabled={loading}>
            Search
          </button>
        </div>
        <div className="flex items-center pt-2">
          <span>Order: </span>
          <input
            type="checkbox"
            onChange={handleSort}
            checked={sort}
            className="ml-1 mt-2"
          />
        </div>
        <p className="text-red-600 text-sm">{error}</p>
      </form>
    </header>
  )
}
