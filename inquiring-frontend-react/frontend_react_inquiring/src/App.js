import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import SuccessPage from './Components/SuccessPage';
import Footer from './Components/Footer';
import GetAxios from './Components/GetAxios';
function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/query-submit' element={<Home/>}>
      </Route>
      <Route path='/query-submit/success' element={<SuccessPage />} />

    </Routes>
    {/* <GetAxios/> */}
    <Footer/>
    </>

  )
}

export default App