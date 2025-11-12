// import { useState } from "react"

export default function Counter({ count, setCount}){

    // const [count, setCount] = useState(0);

    const clickCounterHandler = () => {
        setCount(count => count + 1)
    }

    return (
        <>
        <h2>Counter - {count}</h2>

        <button onClick={clickCounterHandler}>+</button>
        </>      
    )
}