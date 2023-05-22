import { createBrowserRouter } from 'react-router-dom'
import { Blog } from './pages/blog'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
  },
])
