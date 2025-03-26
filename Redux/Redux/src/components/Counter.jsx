import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,reset,incrementByAmount } from "../redux/features/CounterSlice";

function Counter(){
    const count = useSelector((state)=>state.counter.count);
    const dispatch  = useDispatch();

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔄 Reset</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          ➕ Increment by 5
        </button>
      </div>
    )
}

export default Counter;