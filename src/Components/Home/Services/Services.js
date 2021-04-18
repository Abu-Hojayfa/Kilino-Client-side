import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { useHistory } from "react-router";

const Services = () => {
  AOS.init({
    duration: 2000,
  });

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://calm-caverns-90808.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);


  let history = useHistory();
  const clickHandle = (id) =>{
    history.push(`/pay/${id}`);
  };

  return (
    <div className="working-exp-container">
      <div className="working-info">
        <h2 className="text-center">Best Cleaning Services</h2>
        <p className="w-25 text-secondary text-center m-auto">
          Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Officia beatae tenetur et, ea soluta error doloremque delectus totam
        </p>
      </div>

      <div className="row w-75 m-auto">

        {services.map((service) => (
          <div key={service._id} className="col-md-4">
            <div data-aos="fade-up" className="services-card">
              <div className="img">
                <img src={service.img} alt=""/>
              </div>
              <h5>{service.name}</h5>
              <p className="text-secondary text-justify">
                {service.dis}
              </p>
              <div className="d-flex justify-content-between align-items-center">
              <button onClick={()=>clickHandle(service._id)} className="btn general-button">Book Now</button>
              <h3 className='service-price'>${service.price}</h3>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;
