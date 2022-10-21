import React, {useReducer} from 'react'

function Counter1() {

    let initialState = 0
    const reducer = (state, action) => {
        switch(action){
            case 1:
                return state + 1
            case 2:
                return state - 1
            case 3:
                return initialState
            default:
                return state
        }
    }
    
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(1)}>Plus</button>
        <button onClick={() => dispatch(2)}>Minus</button>
        <button onClick={() => dispatch(3)}>Reset</button>
    </div>
  )
}

export default Counter1