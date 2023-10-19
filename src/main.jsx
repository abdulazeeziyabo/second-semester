import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './main.css';
const UserElements =  lazy(()=> import ( './views/userElements.jsx'));
import RepositoryDetails from './views/repositoryDetails';
import Dashboard from './layouts/Dashboard.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import ErrorTesting from './components/ErrorTesting.jsx';
import Fallback from './components/Fallback.jsx';


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
