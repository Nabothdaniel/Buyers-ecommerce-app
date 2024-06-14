import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import {Catalogue} from './pages/Catalogue.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Login from './pages/Login'
import SignUp from './pages/SignUp.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/catalogue',
        element:<Catalogue/>
      },
      {
        path:'/arrivals',
        element:<NewArrivals/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ]
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>
)
