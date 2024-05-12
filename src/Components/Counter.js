import React, {useState} from "react";
import withCounter from "./HOC/withCounter";
import Button from "./Button";
function Counter() {
  const WrappedIncrementButton = withCounter(Button, 1, 10);
  const WrappedDecrementButton = withCounter(Button, 10, 1);
  return (
    <div className="counter">
      <WrappedIncrementButton/>
      <WrappedDecrementButton/>
    </div>
  );
}

export default Counter;
