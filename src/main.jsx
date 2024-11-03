import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Statistics from './pages/Statistics';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import GadgetCard from './components/GadgetCard';
import GadgetDetails from './pages/GadgetDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('../categories.json'),
        children:[
          {
            path:"/",
            element:<GadgetCard></GadgetCard>,
            loader:()=> fetch('../gadget.json'),
          },
          {
            path:"/categories/:category",
            element:<GadgetCard></GadgetCard>,
            loader:()=> fetch('../gadget.json'),
          },
        ]
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
      }, 
      {
        path:"/gadget/:id",
        element:<GadgetDetails></GadgetDetails>,
        loader:()=> fetch('../gadget.json'),
      },
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
