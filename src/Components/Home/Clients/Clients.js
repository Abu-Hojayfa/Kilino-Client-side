import React from 'react';
import './Client.css';
import host from '../../../image/icons/host.jpg';
import seo from '../../../image/icons/seo.png';
import ibm from '../../../image/icons/ibm.jpg';
import frabo from '../../../image/icons/frabo.png';

const Clients = () => {
  return (
    <div className='w-75 m-auto mt-5 pt-5 client-caru'>
      <div className="client-info">
        <h2 className='text-center'>
          Our Awesome Clients
        </h2>
      </div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="2000">
            <div className="row">
              <div className="col-md-3 d-flex align-items-center">
                <img src={ibm} alt="" />
                <h4>IBM Media</h4>
              </div>
              
              <div className="col-md-3 d-flex align-items-center">
                <img src={frabo} alt="" />
                  <h4>Frabo Mania</h4>                
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <img src={host} alt="" />
                <h4>GREEN HOST</h4>
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <img src={seo} alt="" />
                <h4>Atomic Seo</h4>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <div className="row">
              <div className="col-md-3 d-flex align-items-center">
                <img src={seo} alt="" />
                <h4>Atomic Seo</h4>
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <img src={frabo} alt="" />
                  <h4>Frabo Mania</h4>
              </div>
              
              <div className="col-md-3 d-flex align-items-center">
                <img src={ibm} alt="" />
                <h4>IBM Media</h4>
              </div>
              
              <div className="col-md-3 d-flex align-items-center">
                <img src={host} alt="" />
                <h4>GREEN HOST</h4>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="row">

              <div className="col-md-3 d-flex align-items-center">
                <img src={frabo} alt="" />
                  <h4>Frabo Mania</h4>
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <img src={ibm} alt="" />
                <h4>IBM Media</h4>
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <img src={host} alt="" />
                <h4>GREEN HOST</h4>
              </div>

              <div className="col-md-3 d-flex align-items-center">
                <img src={seo} alt="" />
                <h4>Atomic Seo</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Clients;