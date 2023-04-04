import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About';
import Meals from './Meals';
import Contact from './Contact';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
     {
      path: '/',
      element: <Home/>
     },
     {
      path: 'about',
      element: <About/>
     },
     {
      path: 'meals',
      element: <Meals/>
     },
     {
      path: 'contact',
      element: <Contact/>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
