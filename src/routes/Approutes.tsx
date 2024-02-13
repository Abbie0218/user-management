import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import UserManagement from '../components/UserManagement';
import NotFound from '../components/NotFound';
import UserDetail from '../components/UserDetail/UserDetail';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <UserManagement />,
      errorElement: <NotFound />,
      handle: {
        crumb: () => "User Management",
      },
    },
    {
        path: "/userDetail",
        element: <UserDetail />,
        errorElement: <NotFound />,
        handle: {
          crumb: () => "User Detail",
        },
      },
])

export default router;
