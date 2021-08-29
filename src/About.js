import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

function About(props) {
  const [state, setState] = useState(0);
  const plus = () => {
    setState(state + 1);
  };
  const minus = () => {
    if (state <= 0) {
      return false;
    } else {
      setState(state - 1);
    }
  };
  const match = useRouteMatch();
  let currentIndex = props.paltar.filter(
    (index) => Number(index.id) === Number(match.params.topicId)
  );

  return (
    <div>
      {currentIndex.map((index, key) => (
        <div key={key}>
          <img src={index.url} />
          <p style={{ fontSize: "30px" }}>
            <b>{index.dressName}</b> {index.price}AZN
          </p>
        </div>
      ))}
      <button
        style={{
          backgroundColor: "green",
          borderColor: "transparent",
          borderRadius: "5px",
        }}
        onClick={plus}
      >
        +
      </button>
      {state}
      <button
        style={{
          backgroundColor: "red",
          borderColor: "transparent",
          borderRadius: "5px",
        }}
        onClick={minus}
      >
        -
      </button>
      <br></br>
      <p>Total:</p>
      <button className="buy-now">Buy now</button>
    </div>
  );
}

export default About;
