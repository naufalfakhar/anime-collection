import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimeList from './pages/Anime'
import CollectionList from './pages/Collection'

const router = createBrowserRouter([
  { path: '/', element: <AnimeList /> },
  { path: '/collection', element: <CollectionList /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
