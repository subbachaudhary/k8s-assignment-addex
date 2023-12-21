import React from "react";
import { Link } from 'react-router-dom'
function Footer(props){
    return(
        console.log(props),
        <>
      <footer className="footer bg-dark text-muted">
        <div className="container">
            <div className="row p-4">
            <div className="col-lg-6">
                <h5>About Us</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam massa quis lacus tincidunt, ut vulputate ex cursus.</p>
            </div>
            <div className="col-lg-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                <li><Link to='/' className="nav-link" >Home</Link></li>
                <li><Link to='/' className="nav-link" >Linkbout</Link></li>
                <li><Link to='/' className="nav-link" >Services</Link></li>
                <li><Link to='/' className="nav-link" >ContLinkct</Link></li>
                </ul>
            </div>
            <div className="col-lg-3">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                <li>Address: Sundarharaicha-2, Itahari City, Nepal</li>
                <li>Email: bhuwanchy069@gmail.com</li>
                <li>Phone: +9779804011563</li>
                </ul>
            </div>
            </div>
        </div>
        <hr/>
        <div className="text-center p-2">
            <span>&copy; 2023 oNe&oNlyoNe BhuoNe. All rights reserved.</span>
        </div>
        </footer>

        </>
        
    );
}

export default Footer;