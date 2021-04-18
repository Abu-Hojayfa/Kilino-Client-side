import React from "react";
import "./WorkingExp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import boss from "../../../image/images/team1.jpg";
import house from "../../../image/images/team2.jpg";
import room from "../../../image/images/team3.jpg";

const WorkingExp = () => {
  AOS.init({
    duration: 2000,
  });

  return (
    <div className="w-75 m-auto mt-5 services-container">
      <div className="row">
        <div className="leftSide col-md-8 row">
          <div
            data-aos="fade-right"
            className="col-md-7 mt-5 services-description"
          >
            <div className="service-head d-flex align-items-center">
              <h5>Team Members</h5>
              <div className="sideLine"></div>
            </div>
            <h2>Our Working Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              aliquam tempore enim id dignissimos, dolorum asperiores illum
              minima maxime nam, eveniet quibusdam quos! Soluta fugit nemo nulla
              maxime necessitatibus. Corporis.
            </p>
            <button className="btn general-button">Load More</button>
          </div>

          <div className="col-md-5 mt-5">
            <div data-aos="zoom-in" className="team-profile">
              <img className="img-fluid" src={boss} alt="" />
              <h3 className="text-center">Michael James</h3>
              <p className="text-center text-secondary">Office Cleaner</p>
              <div data-aos="fade-left" className="social-info">
                <FontAwesomeIcon icon={faFacebookF} /> <br />
                <FontAwesomeIcon icon={faInstagram} /> <br />
                <FontAwesomeIcon icon={faWhatsapp} /> <br />
                <FontAwesomeIcon icon={faTelegram} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div data-aos="fade-down" className="team-profile">
            <img className="img-fluid" src={house} alt="" />
            <h3 className="text-center">Poppy James</h3>
            <p className="text-center text-secondary">House Cleaner</p>
            <div className="social-info">
              <FontAwesomeIcon icon={faFacebookF} /> <br />
              <FontAwesomeIcon icon={faInstagram} /> <br />
              <FontAwesomeIcon icon={faWhatsapp} /> <br />
              <FontAwesomeIcon icon={faTelegram} />
            </div>
          </div>

          <div className="mt-3">
            <div data-aos="fade-up" className="team-profile">
              <img className="img-fluid" src={room} alt="" />
              <h3 className="text-center">William James</h3>
              <p className="text-center text-secondary">Restaurant Cleaner</p>
              <div className="social-info">
                <FontAwesomeIcon icon={faFacebookF} /> <br />
                <FontAwesomeIcon icon={faInstagram} /> <br />
                <FontAwesomeIcon icon={faWhatsapp} /> <br />
                <FontAwesomeIcon icon={faTelegram} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingExp;
