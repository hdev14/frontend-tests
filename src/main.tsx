import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AddProfile from './pages/AddProfile'
import RepoList from './pages/RepoList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RepoList />
  },
  {
    path: '/add',
    element: <AddProfile />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
