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
    <Blog></Blog>
    
   
    </div>
  )
}

export default App
