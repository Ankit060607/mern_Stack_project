import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Signin from './components/Signin'
import Singout from './components/Singout'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/sign-in" element={<Signin/>}/>
   <Route path="/sign-out" element={<Singout/>}/>
   <Route path="/dasboard" element={<Dashboard/>}/>
   <Route path="/project" element={<Projects/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
