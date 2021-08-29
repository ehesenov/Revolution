import React from "react";
import { useSelector } from "react-redux";

function Card() {
  const selector = useSelector((state) => state.cardReducer);
  console.log(selector);
  return (
    <div className="card">
      {/* <a name="cart-btn"></a>
            <h1>Nothing in Card</h1> */}
      {selector.map((index) => (
        <img src={index.url} />
      ))}
    </div>
  );
}

export default Card;
