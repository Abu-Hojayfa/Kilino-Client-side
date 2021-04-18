import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import './BookingList.css';

const BookingList = () => {

  const [services, setServices] = useState([]);

  const [loggedin] =useContext(userContext);

  useEffect(() => {
    fetch("https://calm-caverns-90808.herokuapp.com/userservices",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({email: loggedin.email})
    })
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [loggedin.email]);
  return (
    <div className='booking-list'>
      <h2 >
        Your All Booking List
      </h2>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th className="orderEmail">Email</th>
            <th>Service Name</th>
            <th>Price</th>
            <th className="ps-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>{service.email}</td>
              <td>{service.productInfo.productName}</td>
              <td>${service.productInfo.price}</td>
              <td className={`${service.status === 'pending'?'text-danger' : 'text-success'}`}>{service.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;