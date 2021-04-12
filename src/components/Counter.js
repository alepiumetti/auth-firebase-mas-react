import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store";

const Counter = (props) => {
  const inc = () => {
    props.dispatch(increment());
  };
  const dec = () => {
    props.dispatch(decrement());
  };

  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <h1>{props.count}</h1>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    count: state,
  };
};

export default connect(mapStateToProp)(Counter);
