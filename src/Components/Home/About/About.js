import React from 'react';
import './About.css';
import about from '../../../image/images/about-bg.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {

  AOS.init({
    duration : 2000
  });

  return (
    <div className='mt-5 about-container'>
      <div className="row w-75 m-auto">

        <div className="col-md-6 col-sm-12">
          <div className="about-info">
            <div className="service-head d-flex align-items-center">
              <h5>About</h5>
              <div className="sideLine"></div>
            </div>
            <h2>
            Professional Cleaning Services company
            </h2>
            <p className='text-secondary text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mauris vitae egestas dolor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mauris vitae egestas dolor consectetur.</p>
            <button className='btn general-button'>Load More</button>
          </div>
        </div>

        <div data-aos="fade-up" className="col-md-6 about-img">
          <img className='img-fluid' src={about} alt=""/>
          <div className="exp">
            <h3>12+</h3>
            <p>Years <br/> Experience</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;