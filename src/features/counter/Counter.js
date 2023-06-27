import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [amount, setAmount] = useState(0);
  const addValue = Number(amount) || 0;
  const dispatch = useDispatch();

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter - {count} </h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={resetAll}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>+</button>
      </div>
    </div>
  );
};

export default Counter;
