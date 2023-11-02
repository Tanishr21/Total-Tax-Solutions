
import './App.css'
import Index from './components/landing/Index'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Service from './components/services/Service'

import Home from './components/home/Home'
import About from './components/about/About'
import Contacttest from "./components/contact/Contacttest"
import Footer from './components/Footer'
function App() {
  

  return (
    <BrowserRouter >
      <Index/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contacttest/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
