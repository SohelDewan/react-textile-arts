import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import UpdateProfile from './components/UpdateProfile';
import EstateSectionPage from './components/EstateSectionPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ViewEstateDetails from './components/ViewEstateDetails';
import AddCraft from './components/AddCraft';
import MyArtCraft from './components/MyArtCraft';
import ProductDetails from './components/ProductDetails';
import UpdateCraft from './components/UpdateCraft';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/craft'),    
      },
      {
        path: "/view-property",
        element: <ViewEstateDetails />,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/estate/:id',
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/art-section-page",
        element: <EstateSectionPage />,
        loader: ()=> fetch('/data.json') 
      },
      {
        path:'/add-craft',
        element:<AddCraft></AddCraft>
      },
      {
        path:'/update-craft',
        element:<UpdateCraft></UpdateCraft>
      },
      {
        path:'/myart-craft',
        element:<MyArtCraft></MyArtCraft>
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>
    <RouterProvider router={router} />
  </FirebaseProvider>
  </React.StrictMode>,
)
