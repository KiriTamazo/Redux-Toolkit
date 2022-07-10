import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementAmout,
  increment,
  incrementAmout,
  reset,
} from "./counterSlicer";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const addValue = Number(amount) || 0;
  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
      </div>

      <div>
        <button onClick={() => dispatch(incrementAmout(addValue))}>+</button>
        <button onClick={() => dispatch(decrementAmout(addValue))}>-</button>
        <button onClick={resetAll}>Reset All</button>
      </div>
    </section>
  );
};

export default Counter;
