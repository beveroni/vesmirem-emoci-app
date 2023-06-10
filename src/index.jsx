import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { Game } from './pages/Game';
import { ErrorPage } from './pages/ErrorPage';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/">Homepage</Link>
        <span> | </span>
        <Link to="/games">Games</Link>
        <span> | </span>
        <Link to="/games/:Id">Games</Link>
        <span> | </span>
      </nav>
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
        element: <GamePage />,
      },
      {
        path: '/games/:Id',
        element: <Game />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
