import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderPayment from "./OrderPayment";
import Navbar from "../Home/Navbar/Navbar";
import './Process.css';

const stripePromise = loadStripe(
  "pk_test_51Ie0kgJ5aZKyNK5StKl0K4SosrbxJHnU8bLyuGUxlxbL7AykmFy6aSXsw0uwr2gaAo4bIRYnSlSCURXxKnL2lEqb00rfeYL4th"
);

const Process = () => {
  return (
    <div className='paymentPage'>
    <Navbar />
    <div className="paymentForm m-auto">
    <Elements stripe={stripePromise}>
      <OrderPayment />
    </Elements>
    </div>
    </div>
  );
};

export default Process;
