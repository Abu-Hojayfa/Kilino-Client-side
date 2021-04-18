import React, { useContext, useEffect, useState } from "react";
import "./SideNavbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faHdd,
  faPlus,
  faShoppingCart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";

const SideNavbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn] = useContext(userContext);
  const [checkEmail, setCheckEmail] = useState([]);

  useEffect(() => {
    fetch("https://calm-caverns-90808.herokuapp.com/isadmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedIn.email }),
    })
      .then((res) => res.json())
      .then((data) => setCheckEmail(data));
  }, [loggedIn.email]);

  useEffect(() => {
    if (checkEmail.length === 0) {
      setIsAdmin(false);
    } else {
      setIsAdmin(true);
    }
  }, [checkEmail]);

  return (
    <div className="sideNavbar">
      {isAdmin ? (
        <div>
          <Link to="/dashboard/admin/allorder">
          <p>
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faHdd}
            />
            Order List</p>
          </Link>

          <Link to="/dashboard/admin/addservice">
            <p>
              <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faPlus} />{" "}
              Add Service
            </p>
          </Link>

          <Link to="/dashboard/admin/addadmin">
            <p>
              <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faUserPlus} />{" "}
              Make Admin
            </p>
          </Link>

          <Link to="/dashboard/admin/manageservices">
            <p>
              <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faHdd} />{" "}
              Manage Services
            </p>
          </Link>

        </div>
      ) : (
        <div>
          <Link to="/">
            <p>
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faShoppingCart}
              />{" "}
              Book Services
            </p>
          </Link>

          <Link to="/dashboard/bookinglist">
            <p>
              <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faHdd} />{" "}
              Booking List
            </p>
          </Link>

          <Link to="/dashboard/review">
            <p>
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faCommentAlt}
              />{" "}
              Review services
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideNavbar;
