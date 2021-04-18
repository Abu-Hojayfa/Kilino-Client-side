import React from "react";
import "./News.css";
import news1 from "../../../image/images/news-01.jpg";
import news2 from "../../../image/images/news-02.jpg";
import news3 from "../../../image/images/news-03.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  AOS.init({
    duration: 2000,
  });

  return (
    <div className="allNems">
      <div className="row news-container m-auto">
        <div className="news-info d-flex justify-content-between">
          <div className="service-head d-flex align-items-center">
            <h5>Services</h5>
            <div className="sideLine"></div>
          </div>
          <button className="btn general-button">Load More</button>
        </div>
        <h2>Always update news here</h2>

        <div className="row mt-5">
          <div className="col-md-4">
            <div data-aos="zoom-in" className="newsSolo">
              <img className='img-fluid' src={news1} alt="" />
              <h2>Benefits of Cleaning Your Home Regularly</h2>
              <p>
                Quality service begins with quality people. Each CleanNet®
                certified operator receives extensive, ongoing training in
                product…
              </p>
              <button className="btn general-button">Read More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div data-aos="zoom-in" className="newsSolo">
              <img className='img-fluid' src={news2} alt="" />
              <h2>Benefits of Cleaning Your Home Regularly</h2>
              <p>
                Quality service begins with quality people. Each CleanNet®
                certified operator receives extensive, ongoing training in
                product…
              </p>
              <button className="btn general-button">Read More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div data-aos="zoom-in" className="newsSolo">
              <img className='img-fluid' src={news3} alt="" />
              <h2>Benefits of Cleaning Your Home Regularly</h2>
              <p>
                Quality service begins with quality people. Each CleanNet®
                certified operator receives extensive, ongoing training in
                product…
              </p>
              <button className="btn general-button">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
