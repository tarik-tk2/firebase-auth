import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import Home from './Home/Home.jsx'
import Register from './Register/Register.jsx'
import Login from './Login/Login.jsx'
import Auth_Provider from './Provider/Auth_Provider.jsx'
import Success from './Success/Success.jsx'
import Private from './Private/Private.jsx'
import Order from './Order/Order.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children: [{
      path: '/',
      element:<Home/>
    },
      {
        path: "/register",
        element:<Register/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: '/success',
        element:<Success/>
      },
      {
        path: '/order',
        element:<Private><Order></Order></Private>
      }]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth_Provider>
      <RouterProvider router={router}></RouterProvider>
    </Auth_Provider>
  </React.StrictMode>
);
