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
      element: <Meals/>,
      loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
     },
     {
      path: 'contact',
      element: <Contact/>
     },
     {
      path: '*',
      element: <div  className='text-7xl font bold text-center my-64'>404 Not Found</div>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
