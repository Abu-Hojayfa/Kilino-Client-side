import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="row footer-main m-auto">
          <div className="col-md-3">
            <h4>About</h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="footer-social">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faTelegram} />
            </div>
          </div>

          <div className="col-md-3">
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Testimonial</p>
            <p>Faq</p>
          </div>

          <div className="col-md-3">
            <h4>Services</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Testimonial</p>
            <p>Faq</p>
          </div>

          <div className="col-md-3">
            <h4>Address</h4>
            <p>
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faEnvelopeOpen}
              />{" "}
              adsu.fess10@gmail.com
            </p>
            <p>
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faPhoneVolume}
              />
              +22 124 7894 885
            </p>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <h5 className="text-center text-light m-0">
          Inspired by killino.com ({new Date().getFullYear()})
        </h5>
      </div>
    </div>
  );
};

export default Footer;
