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
      <h1>Vesmírem emocí</h1>
      <nav>
        <Link to="/">Homepage</Link>
        <span> | </span>
        <Link to="/gamepage">Gamepage</Link>
        <span> | </span>
        <Link to="/game/:Id">Game</Link>
        <span> | </span>
      </nav>
      <Outlet />
    </div>
  );
};

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/',
//     element: ,
//   },
//   {
//     path: '/',
//     element: ,
//   },
//   {
//     path: '/',
//     element: ,
//   },
// ]);

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
        path: '/gamepage',
        element: <GamePage />,
      },
      {
        path: '/game/:Id',
        element: <Game />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
