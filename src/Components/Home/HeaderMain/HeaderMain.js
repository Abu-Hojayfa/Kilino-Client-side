import React from 'react';
import './HeaderMain.css';
import headerImg from '../../../image/images/hero-img.png';
import animation1 from '../../../image/icons/bi-02.png';import AOS from 'aos';
import "aos/dist/aos.css";

const HeaderMain = () => {

  AOS.init({
    duration : 2000
  });
  
  return (
    <div className='pt-5  header-main'>
      <div className="row w-75 m-auto">
        <div data-aos="zoom-in" className="col-md-5 info">
          <h5>We are the best</h5>
          <h1>
            Examples of great cleaning that get it right.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eaque cumque, vitae tenetur sequi repellat?
          </p>
          <button className='btn general-button'>Contact Us</button>
        </div>
        <div className="col-md-6 header-img">
          <img className='img-fluid' src={headerImg} alt=""/>
        </div>
      </div>
      <div className="all-circle">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="left-animation">
        <img src={animation1} alt=""/>
        <div className="solo-circle"></div>
      </div>
    </div>
  );
};

export default HeaderMain;