import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.incrementCounter(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
