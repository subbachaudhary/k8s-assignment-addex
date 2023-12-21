import React from 'react'
import bg_img from '../bg2.png'
import { Link } from 'react-router-dom'
function Body() {
  return (
    
      
    <div className="">
      <div className="position-relative">
        <img src={bg_img} className="img-fluid" alt="Img"/>
        <div className="image-overlay">
          <h2 className="text-center text-white ps-4">ANY QUERY ?</h2>
          <button className="btn btn-primary ">
          <Link to='/query-submit' className="nav-link active" aria-current="page">DROP YOUR QUERY HERE !!!</Link>
                
          </button>
        </div>
      </div>
    </div>
     
  )
}

export default Body