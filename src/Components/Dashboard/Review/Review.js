import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../../App';
import './Review.css';

const Review = () => {
  const [loggedIn] = useContext(userContext);
  const [reviewInfo, setReviewInfo] = useState({
    name: loggedIn.name,
    email: loggedIn.email,
    img : loggedIn.img
  });

  const onBlur = (e) =>{
    let info = {...reviewInfo};
    info[e.target.name]=e.target.value;
    setReviewInfo(info);
  };
  let history =useHistory();
  const giveReview = () =>{
    if(reviewInfo.dis && reviewInfo.company){
      fetch("https://calm-caverns-90808.herokuapp.com/addanewreview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewInfo),
      })
        .then((res) => res.json())
        .then((data) => alert('Successfully Add a Review'));
    } else {
      alert('Set company Name and Description Properly');
      history.push('/');
    }
  };

  return (
    <div className='reviewContainer'>
      <h2>Please review our service</h2>
      <input onBlur={onBlur} type="text" name="company" placeholder='company name' /> <br/>
      <textarea onBlur={onBlur} name="dis" placeholder='Your description Here' rows="10"></textarea> <br/>
      <button onClick={giveReview} className='btn general-button'>Give a Review</button>
    </div>
  );
};

export default Review;