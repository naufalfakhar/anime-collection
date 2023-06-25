import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '@/components/RootLayout'
import Anime from '@/pages/Anime'
import CollectionList from '@/pages/Collection'
import AnimeDetail from '@/pages/Anime/[id]'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Anime /> },
      { path: '/anime/:id', element: <AnimeDetail /> },
      { path: '/collection', element: <CollectionList /> },
    ],
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
