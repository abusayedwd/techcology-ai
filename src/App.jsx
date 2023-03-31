import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Blog from './Components/Blogs/Blog'
import Header from './Components/Header/Header'
import SpenTime from './Components/SpenTime/SpenTime'
import SideCart from './Components/Sidecart/SideCart'

function App() {
  

  return (
    <div className="App container ">
    <Header></Header>
   <div className="main row row-cols-sm-1 row-cols-md-2">
   <div className="blog-container col-md-8 col-sm-12 ">
   <Blog></Blog>
    
   </div>
   
   <div className="cart-container setp col-md-4 col-sm-12">
     
    <SideCart></SideCart>
   </div>
   </div>
   
    </div>
  )
}

export default App
