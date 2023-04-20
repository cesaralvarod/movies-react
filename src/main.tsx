import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MoviesProvider from './context/movies/MoviesProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>
)
