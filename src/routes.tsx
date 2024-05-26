import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { Home } from './pages/Home'
import { MoreProfiles } from './pages/MoreProfiles'
import { MyProfile } from './pages/MyProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/me',
        element: <MyProfile />,
      },
      {
        path: '/all',
        element: <MoreProfiles />,
      },
    ],
  },
])
