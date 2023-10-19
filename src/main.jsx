import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './main.css';
const UserElements =  lazy(()=> import ( './views/userElements'));
import RepositoryDetails from './views/repositoryDetails';
import Dashboard from './layouts/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound/NotFound';
import ErrorTesting from './components/errorTesting';
import Fallback from './components/FallBack';


// create routes
const routes = [
  {
    element: <ErrorBoundary />,
    children: [
      {
        element: <Dashboard />,
        children: [
          { path: "/", element: <UserElements /> },
           { path: "repository/:id", element: <RepositoryDetails /> },
        ],
      },
      {
        path: "/error-testing",
        element: <ErrorTesting />,
      },
      { element: <NotFound />, path: "*" },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
