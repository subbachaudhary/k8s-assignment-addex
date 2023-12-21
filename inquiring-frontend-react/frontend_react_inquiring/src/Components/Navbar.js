// import React from 'react'
// import { Link } from 'react-router-dom'
// function Navbar() {
//   return (
//   //  <nav>
//   //   <Link to='/'>Home</Link>
//   //   <Link to='/about'>About</Link>
//   //  </nav>
  
//   )
// }

// export default Navbar


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <Link to='/' className="navbar-brand">LOGO_APP</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
          <Link to='/about' className="nav-link">About</Link>
        </li>
     
      </ul>
      <div className="d-flex">
              <button className="btn btn-outline-primary me-4">Login</button>
              <button className="btn btn-primary">Signup</button>
       </div>

    </div>
  </div>
</nav>

    </div>
  );
}

export default Navbar;
