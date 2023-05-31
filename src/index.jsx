import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { GamePage } from './pages/GamePage';
import { Game } from './pages/Game';
import { ErrorPage } from './pages/ErrorPage';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <h1>Vesmírem emocí</h1>
      <nav>
        <Link to="/">MainPage</Link>
        <span> | </span>
        <Link to="/gamepage">Gamepage</Link>
        <span> | </span>
        <Link to="/game/:Id">Game</Link>
        <span> | </span>
      </nav>
    </div>
  );
};

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/homepage',
//     element: <HomePage />,
//   },
//   {
//     path: '/aboutpage',
//     element: <AboutPage />,
//   },
//   {
//     path: '/contact',
//     element: <ContactPage />,
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
        element: <MainPage />,
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
