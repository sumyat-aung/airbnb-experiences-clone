import React from "react";
import star from "../images/star.png";

export default function Eachcard(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.img} alt="services" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="stars" className="card--star" />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <b>From ${props.price} </b> / person
      </p>
    </div>
  );
}
