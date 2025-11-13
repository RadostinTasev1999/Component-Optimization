// import { useState } from "react"
import React from 'react'

function Counter({ count, increment}){

    // const [count, setCount] = useState(0);

  

    return (
        <>
        <h2>Counter - {count}</h2>

        <button onClick={() => increment()}>+</button>
        </>      
    )
}


export default React.memo(Counter);
/*
We wrap the component in memo to get a memoized version of that component
This returns a new React component
It behaves the same as the component provided to memo except that React will not 
always re-render it when its parent is being re-rendered unless its props have changes
Memoized components skip re-renders during parent updates if their new
props are the same as the old props
*/