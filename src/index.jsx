import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PlanetsPage } from './pages/PlanetsPage';
import { GamePage } from './pages/GamePage';
import { ErrorPage } from './pages/ErrorPage';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/games',
        element: <PlanetsPage />,
      },
      {
        path: '/games/:planetId',
        element: <GamePage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
