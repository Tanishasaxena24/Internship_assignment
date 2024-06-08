import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Pricing from './components/pricing/Pricing.jsx'
import Features from './components/features/Features.jsx'
import GetStarted from './components/getStarted/GetStarted.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route  path="" element={<Home/>} />
      <Route  path="aboutus" element={<About/>} />
      <Route  path="pricing" element={<Pricing/>} />
      <Route  path="features" element={<Features/>}/>
      <Route  path="getstarted" element={<GetStarted/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
