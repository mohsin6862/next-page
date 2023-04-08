import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About'

import Books from './components/Book/Books';

const router = createBrowserRouter([

  {
    path:'/',
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home/>

      },
    
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'books',
        element:<Books></Books>,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
