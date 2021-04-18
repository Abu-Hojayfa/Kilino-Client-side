import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./ManageService.css";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://calm-caverns-90808.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const deleteService = (id, e) => {
    
    fetch('https://calm-caverns-90808.herokuapp.com/deleteservice',{
      method:"DELETE",
      headers:{'content-type':'application/json'},
      body: JSON.stringify({id: id})
    })
    .then(res=> res.json())
    .then(data => {
      (e.target.parentElement.parentElement.parentElement).style.display ="none";
      alert('Successfully Deleted');
    });

  };
  return (
    <div className="w-75 mt-5 pt-2 ms-5">
      <h2>Manage Services</h2>
      <table className="table w-75 table-borderless">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>${service.price}</td>
              <td>
                <FontAwesomeIcon onClick={(event)=> deleteService(service._id, event)} className="deleteService" icon={faTrashAlt} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageServices;
