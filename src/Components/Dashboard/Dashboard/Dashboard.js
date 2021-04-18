import React from "react";
import { Route } from "react-router";
import Navbar from "../../Home/Navbar/Navbar";
import AddAdmin from "../Admin/AddAdmin/AddAdmin";
import AddServices from "../Admin/AddServices/AddServices";
import ManageServices from "../Admin/ManageServices/ManageServices";
import OrderList from "../Admin/OrderList/OrderList";
import BookingList from "../BookingList/BookingList";
import Review from "../Review/Review";
import SideNavbar from "../SideNavbar/SideNavbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="content d-flex">
        <SideNavbar />
        <Route path="/dashboard/bookinglist">
          <BookingList />
        </Route>
        <Route path="/dashboard/review">
          <Review />
        </Route>
        <Route path="/dashboard/admin/addadmin">
          <AddAdmin />
        </Route>
        <Route path="/dashboard/admin/addservice">
          <AddServices />
        </Route>
        <Route path="/dashboard/admin/manageservices">
          <ManageServices />
        </Route>
        <Route path="/dashboard/admin/allorder">
          <OrderList />
        </Route>
      </div>
    </div>
  );
};

export default Dashboard;
