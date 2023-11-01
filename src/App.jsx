
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navebar from './assets/components/navebar/Navebar.jsx'
import Products from './assets/components/products/Products.jsx'
import Resturent from './assets/components/resturent/Resturent.jsx'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PageNotFound from './assets/components/pageNotFound/PageNotFound.jsx'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navebar/>
    <Routes>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/resturent' element={<Resturent/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}