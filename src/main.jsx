import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Error from './components/Error/Error'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Friends from './components/Friends/Friends'
import FriendDetails from './components/FriendDetails/FriendDetails'


// simple routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <Error />
//   },
//   {
//     path: "/about",
//     element: <About />
//   }, 
//   {
//     path: "/contact",
//     element: <Contact />
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      }, 
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/friends',
        element: <Friends />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendId',
        element: <FriendDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
