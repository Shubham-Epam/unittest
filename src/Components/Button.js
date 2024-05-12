import React from "react";

function Button(props) {
  return (
    <button onClick={() => props.handleClick()}>Count | {props.count} </button>
  );
}

export default Button;
