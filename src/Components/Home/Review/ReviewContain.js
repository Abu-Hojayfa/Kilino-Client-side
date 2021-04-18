import React from "react";
import profile from "../../../image/images/profile.png";


const ReviewContain = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="solo-review">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit
            veniam omnis. Enim, sequi molestias similique quae corrupti est
            quidem. Neque deleniti repellendus modi ex odio, vero assumenda
            sequi cupiditate?
          </h4>
          <div className="reviewImg d-flex align-items-center">
            <img src={profile} alt="" />
            <div className="reviewerInfo">
              <h5>Jaklin Pagla</h5>
              <p>Google </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="solo-review">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit
            veniam omnis. Enim, sequi molestias similique quae corrupti est
            quidem. Neque deleniti repellendus modi ex odio, vero assumenda
            sequi cupiditate?
          </h4>
          <div className="reviewImg d-flex align-items-center">
            <img src={profile} alt="" />
            <div className="reviewerInfo">
              <h5>Mark jakar</h5>
              <p>Faceebbok </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="solo-review">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit
            veniam omnis. Enim, sequi molestias similique quae corrupti est
            quidem. Neque deleniti repellendus modi ex odio, vero assumenda
            sequi cupiditate?
          </h4>
          <div className="reviewImg d-flex align-items-center">
            <img src={profile} alt="" />
            <div className="reviewerInfo">
              <h5>Williom eienstiin</h5>
              <p>Mars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContain;
