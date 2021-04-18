import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { userContext } from "../../App";

const OrderPayment = () => {
  const { id } = useParams();

  const [bookProduct, setBookProduct] = useState([]);

  const [error, setError] = useState(null);

  const [loggedIn] = useContext(userContext);
  const [dataBaseInfo, setDataBaseInfo] = useState({
    name: loggedIn.name,
    email: loggedIn.email,
    status: "pending",
  });

  useEffect(() => {
    fetch("https://calm-caverns-90808.herokuapp.com/service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => setBookProduct(data[0]));
  }, [id]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      dataBaseInfo.paymentInfo = {
        id: paymentMethod.id,
        created: paymentMethod.created,
        card: paymentMethod.card,
      };
    }
  };

  const onBlur = (e) => {
    let info = { ...dataBaseInfo };
    info[e.target.name] = e.target.value;
    setDataBaseInfo(info);
  };

  let history = useHistory();

  const submitToDB = () => {
    dataBaseInfo.productInfo = {
      productName: bookProduct.name,
      price: bookProduct.price,
    };

    if (error === null && dataBaseInfo.number && dataBaseInfo.paymentInfo) {
      fetch("https://calm-caverns-90808.herokuapp.com/paymentinfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataBaseInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Payment SuccessFull");
          history.push("/");
        });
    }
  };

  return (
    <form className="paymentBox" onSubmit={handleSubmit}>
      <h2 className="text-center">{bookProduct.name}</h2>
      <p className="text-center">{bookProduct.dis}</p>
      <input
        onBlur={onBlur}
        type="text"
        name="name"
        defaultValue={loggedIn.name}
        required
      />{" "}
      <br />
      <input
        onBlur={onBlur}
        type="text"
        name="email"
        defaultValue={loggedIn.email}
        required
      />{" "}
      <br />
      <input
        onBlur={onBlur}
        type="number"
        name="number"
        placeholder="Enter your Number"
        required
      />
      <CardElement className="paymentCard" />
      <div className="error">
        {error && <p className="text-danger mt-1">{error}</p>}
      </div>
      <button
        onClick={submitToDB}
        type="submit"
        className="btn general-button"
        disabled={!stripe}
      >
        Please Pay ${bookProduct.price}
      </button>
    </form>
  );
};

export default OrderPayment;
