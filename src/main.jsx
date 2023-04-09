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
import SingleBook from './components/SingleBook/SingleBook';

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
      {
        path:'book/:id',
        element:<SingleBook></SingleBook>,
        loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
       
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
