import React, { useEffect, useState } from "react";
import "./Review.css";
import ReviewContain from "./ReviewContain";

const Review = () => {
  const [reviewer, setReviewer] = useState([]);

  useEffect(() => {
    fetch("https://calm-caverns-90808.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviewer(data));
  }, []);

  return (
    <div className="review-container">
      <div className="review-info m-auto">
        <div className="service-head d-flex align-items-center">
          <h5>Testimonials</h5>
          <div className="sideLine"></div>
        </div>
        <h2>What our clients say</h2>
        <p className="w-50 text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mi
          feugiat proin ornare elementum parturient nibh.
        </p>
      </div>

      <div className="review-container">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <div className="d-block w-100">
                <ReviewContain />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="d-block w-100">
                <ReviewContain />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="d-block w-100">
                <div className="row">
                {reviewer.map((review) => (
                  <div key={review._id} className="col-md-4">
                    <div className="solo-review">
                      <h4>{review.dis}</h4>
                      <div className="reviewImg d-flex align-items-center">
                        <img src={review.img} alt="" />
                        <div className="reviewerInfo">
                          <h5>{review.name}</h5>
                          <p>{review.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
