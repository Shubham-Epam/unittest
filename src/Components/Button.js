import React from "react";
import withCounter from "./HOC/withCounter";

function Button(props) {
  console.log('current dest = ', props.currentDest);
  return (
    <button onClick={() => props.handleClick()}>Count | {props.count} </button>
  );
}

export default Button;
