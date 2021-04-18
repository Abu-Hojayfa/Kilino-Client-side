import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./OrderList.css";

const OrderList = () => {
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetch("https://calm-caverns-90808.herokuapp.com/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  // console.log(errors);

  // fetch("https://calm-caverns-90808.herokuapp.com/updatestatus", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id: id, status: status }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       alert("Status Updated Successfully");
  //     });

  return (
    <div className="w-75 ms-5 mt-5 pt-2">
      <h2>All Order</h2>
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
              <td>
              <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register}>
        <option value="Pending">Pending</option>
        <option value="On the way">On the way</option>
        <option value=" Done"> Done</option>
      </select>

      <input type="submit" />
    </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
