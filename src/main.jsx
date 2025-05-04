import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import About from './components/About.jsx';
import Shop from './components/Shop.jsx';
import Contact from './components/Contact.jsx';

import Header from './components/Header'
import Footer from './components/Footer'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <>  <Header /> <About />  <Footer /> </>
  },
  {
    path: "/shop",
    element: <>  <Header /> <Shop />  <Footer /> </>
  },
  {
    path: "/contact",
    element: <>  <Header /> <Contact />  <Footer /> </>
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
