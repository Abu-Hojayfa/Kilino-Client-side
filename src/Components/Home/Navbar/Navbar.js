import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../image/icons/logo-white.png';
import { userContext } from '../../../App';


const Navbar = () => {

  const [loggedIn] = useContext(userContext);

  return (
    <div >
      <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolled">
        <div className="container-fluid w-75 m-auto">
          <Link to="/home">
            <img className='img-fluid' src={logo} alt=""/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navBar">

              <li className="nav-item">
                <Link to="/home">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>

              {
                loggedIn.name ? 
                <div className="activeIcon">
                  <img src={loggedIn.img} alt=""/>
                  <p>{loggedIn.name}</p>
                </div>
                :
                <button className="nav-item btn">
                <Link to="/login">Login</Link>
              </button>
              }

            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;