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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddCraft from './components/AddCraft';
import MyArtCraft from './components/MyArtCraft';
import UpdateCraft from './components/UpdateCraft';
import AllCart from './components/AllCart';
import ViewDetails from './components/ViewDetails';
import ProductDetails from './components/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://b9-assaignment10-server.vercel.app/craft'),    
      },
      {
        path: "/view-property",
        element: <ViewDetails />,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/craft/:_id',
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
        loader: ()=> fetch('https://b9-assaignment10-server.vercel.app/craft')
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
        element: <AllCart />,
        loader: ()=> fetch('https://b9-assaignment10-server.vercel.app/craft'), 
      },
      {
        path:'/add-craft',
        element:<AddCraft></AddCraft>
      },
      {
        path:'/update-craft/:id',
        element:<UpdateCraft></UpdateCraft>,
        loader: ({params})=> fetch(`https://b9-assaignment10-server.vercel.app/craft/${params.id}`)
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
