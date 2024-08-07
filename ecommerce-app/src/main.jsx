import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import  store  from './stateStore/store.js'
import { About } from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'
import { Catalogue } from './pages/Catalogue.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Login from './pages/Login'
import SignUp from './pages/SignUp.jsx'
import Cart from './pages/Cart.jsx'
import Profile from './components/userProfile/Profile.jsx'
import UserProfile from './components/userProfile/UserProfile.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import SingleProducts from './pages/SingleProducts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path:'/shop/:id',
        element:<SingleProducts/>
      },
      {
        path: '/catalogue',
        element: <Catalogue />
      },
      {
        path: '/arrivals',
        element: <NewArrivals />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path:'/userprofile',
        element:<UserProfile/>
      }
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
