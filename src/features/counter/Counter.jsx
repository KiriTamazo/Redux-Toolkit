import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector();
  const dispatch = useDispatch();

  return <section></section>;
};

export default Counter;
