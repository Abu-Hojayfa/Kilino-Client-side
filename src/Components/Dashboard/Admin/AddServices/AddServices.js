import React, { useState } from "react";
import axios from "axios";
import "./AddServices.css";
import upld from "../../../../image/icons/upload.png";

const AddServices = () => {
  const [newService, setNewService] = useState({});

  const readInputValue = (e) => {
    const bookInfo = { ...newService };
    bookInfo[e.target.name] = e.target.value;
    setNewService(bookInfo);
  };

  const uploadImg = (e) => {
    const ImgData = new FormData();
    ImgData.set("key", "8825c73827437be57b27988af9d20788");
    ImgData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", ImgData)
      .then(function (response) {
        const serviceInfo = { ...newService };
        serviceInfo[e.target.name] = response.data.data.display_url;
        setNewService(serviceInfo);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  console.log(newService);

  const addService = () => {
    if(newService.img && (newService.name && newService.name.length > 0)&&(newService.price && newService.price.length > 0)&&(newService.dis && newService.dis.length > 0)) {
      fetch("https://calm-caverns-90808.herokuapp.com/addnewservice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newService),
      })
        .then((res) => res.json())
        .then((data) => {
          alert('Successfully Add a new Service ');
        });
    }
    else{
      alert('Please fill up All all the Information');
    }
  };
  return (
    <div className="w-75 ms-5 mt-5 pt-2">
      <h2>Add a New Service</h2>
      <div className="inputGrp">
        <div className="grp1">
          <div>
            <p>Service Name</p>
            <input
              onBlur={readInputValue}
              type="text"
              placeholder="Enter Service Name"
              name="name"
              required
            />
          </div>
          <div>
            <p>Description of New Service</p>
            <input
              onBlur={readInputValue}
              type="text"
              placeholder="Write Description"
              name="dis"
              required
            />
          </div>
        </div>

        <div className="grp2">
          <div>
            <p>Price</p>
            <input
              onBlur={readInputValue}
              placeholder="Enter Price"
              type="text"
              name="price"
              required
            />
          </div>
          <div>
            <p>Add service cover Photo</p>
            <label className="fileUpload">
              <img src={upld} alt="" />
              <input
                onChange={uploadImg}
                name="img"
                className="upload"
                type="file"
                required
              />
              <span>Upload Photo</span>
            </label>
          </div>
        </div>

        <button onClick={addService} className="addABook">
          Add a New Service
        </button>
      </div>
    </div>
  );
};

export default AddServices;
