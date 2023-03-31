import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AddProfile from './pages/AddProfile'
import ProfileList from './pages/ProfileList'
import RepoList from './pages/RepoList'
import store from './redux'


const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfileList />,
  },
  {
    path: '/repos/:username',
    element: <RepoList />,
  },
  {
    path: '/add-profile',
    element: <AddProfile />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
