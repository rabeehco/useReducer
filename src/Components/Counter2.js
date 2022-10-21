import React, {useReducer} from 'react'

function Counter2() {

    let initialState = {
        firstCounter: 0
    }
    const reducer = (state, action) => {
        switch(action.type){
            case 1:
                return {firstCounter: state.firstCounter + action.value}
            case 2:
                return {firstCounter: state.firstCounter - action.value}
            case 3:
                return initialState
            default:
                return state
        }
    }
    
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2>{count.firstCounter}</h2>
        <button onClick={() => dispatch({type: 1, value: 1})}>Plus</button>
        <button onClick={() => dispatch({type: 2, value: 1})}>Minus</button>
        <button onClick={() => dispatch({type: 1, value: 5})}>Plus By 5</button>
        <button onClick={() => dispatch({type: 2, value: 5})}>Minus By 5</button>
        <button onClick={() => dispatch({type: 3})}>Reset</button>
    </div>
  )
}

export default Counter2