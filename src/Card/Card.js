import React from "react";
import "./card.css";

const Card = ({ emoje, heading, detail }) => {
  return (
    <div className="Card">
      <img src={emoje} alt="card" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
