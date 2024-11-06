import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import GadgetCard from './components/GadgetCard';
import GadgetDetails from './pages/GadgetDetails';
import ErrorPage from './pages/ErrorPage';
import Reviews from './pages/Reviews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",  
            element: <GadgetCard />,
            loader: () => fetch('../gadget.json'),
          },
          {
            path: "/categories/:category",  
            element: <GadgetCard />,
            loader: () => fetch('../gadget.json'),
          },
        ]
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
        loader:()=>fetch('../reviews.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails />,
        loader: () => fetch('../gadget.json'),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
