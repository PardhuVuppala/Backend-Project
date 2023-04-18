import React from "react";
import { Link } from 'react-router-dom';
import Img from './Pardhu.jpeg'
import './Nav.css';
// import Search from "./Search";
function Navbar()
 {      let usertp = sessionStorage.getItem('Usertype')
        if(usertp === 'USER')
        {
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container">
        <Link class="navbar-brand" href="#">
	      <img src={Img} alt="" width="30" height="30" className="d-inline-block align-text-top"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <Link to="/Search" className="nav-link" aria-current="page" >ViewAll</Link>
              </li>
            
              <li className="nav-item">
                <Link to="/Logout" className="nav-link" >Logout</Link>
              </li>
            </ul>
           </div>
        </div>
        
      </nav>
    )
        }

        else{
      return(
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
            <Link class="navbar-brand" href="#">
              <img src={Img} alt="" width="30" height="30" className="d-inline-block align-text-top"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page" >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/reg" className="nav-link">Registration</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                
                </ul>
               </div>
            </div>
            
          </nav>
      )
        }
 
}
export default Navbar;