import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Education from './pages/Education.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>

    </div>
  )
}

export default App
