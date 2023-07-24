import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import Home from './Home/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children: [{
      path: '/',
      element:<Home/>
    }]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>  
  </React.StrictMode>,
)
