import React from "react";
import Eachcard from "./Eachcard";
import data from "./data";

export default function Card() {
  let dataInmap = data.map((eachData) => {
    return (
      <Eachcard
        img={eachData.coverImg}
        rating={eachData.stats.rating}
        reviewCount={eachData.stats.reviewCount}
        country={eachData.location}
        title={eachData.title}
        price={eachData.price}
      />
    );
  });
  return <div className="card--parent">{dataInmap}</div>;
}
