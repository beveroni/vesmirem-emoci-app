import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PlanetsPage } from './pages/PlanetsPage';
import { GamePage } from './pages/GamePage';
import { ErrorPage } from './pages/ErrorPage';
import './style.css';

const App = () => {
  const [finishedGames, setFinishedGames] = useState([]);
  const handleGameFinished = (game) => {
    setFinishedGames([...finishedGames, game]);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/games',
          element: <PlanetsPage finishedGames={finishedGames} />,
        },
        {
          path: '/games/:planetId',
          element: (
            <GamePage
              finishedGames={finishedGames}
              gameFinished={handleGameFinished}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
createRoot(document.querySelector('#app')).render(<App />);
