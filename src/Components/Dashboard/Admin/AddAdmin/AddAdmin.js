import React, { useState } from "react";
import "./AddAdmin.css";

const AddAdmin = () => {
  const [newAdmin, setEmail] = useState({});
  const onBlur = (e) => {
    let info = { ...newAdmin };
    info[e.target.name] = e.target.value;
    setEmail(info);
  };

  const onClick = () => {
    if (newAdmin.email === "") {
      alert("ADD a Email Address");
    } else {
      fetch("https://calm-caverns-90808.herokuapp.com/makeanadmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAdmin),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Successfully Add an another ADMIN");
        })
        .catch((err) => alert(err.massage));
    }
  };

  return (
    <div className="w-50 ms-5 mt-5 pt-5">
      <h2>Make an Another Admin</h2>

      <div class="input-group mb-3 inputContainer">
        <input
          onBlur={onBlur}
          required
          type="email"
          name="email"
          className="form-control"
          placeholder="example@email.com"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={onClick}
          className="btn adminButn"
          type="button"
          id="button-addon2"
        >
          Add an Admin
        </button>
      </div>
    </div>
  );
};

export default AddAdmin;
