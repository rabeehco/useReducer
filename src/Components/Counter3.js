import React, { useReducer } from "react";

function Counter3() {
  let initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 1:
        return { ...state, firstCounter: state.firstCounter + action.value };
      case 2:
        return { ...state, firstCounter: state.firstCounter - action.value };
      case 3:
        return { ...state, secondCounter: state.secondCounter + action.value };
      case 4:
        return { ...state, secondCounter: state.secondCounter - action.value };
      case 5:
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>First Counter {count.firstCounter}</h2>
      <h2>Second Counter {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: 1, value: 1 })}>Plus</button>
      <button onClick={() => dispatch({ type: 2, value: 1 })}>Minus</button>
      <button onClick={() => dispatch({ type: 1, value: 5 })}>Plus By 5</button>
      <button onClick={() => dispatch({ type: 2, value: 5 })}>
        Minus By 5
      </button>
      <div>
      <button onClick={() => dispatch({ type: 3, value: 1 })}>Increament Counter 2</button>
      <button onClick={() => dispatch({ type: 4, value: 1 })}>Decreament Counter 2</button>
      </div>
      <button onClick={() => dispatch({ type: 5 })}>Reset</button>
    </div>
  );
}

export default Counter3;
