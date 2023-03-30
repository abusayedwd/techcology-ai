import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Blog from './Components/Blogs/Blog'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <div className="App container ">
    <Header></Header>
   <div className="main row">
   <div className="blog-container col-8 ">
   <Blog></Blog>
    
   </div>
   
   <div className="cart-container col-4">
   <h3>hello blog</h3>
   </div>
   </div>
   
    </div>
  )
}

export default App
