import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1) 
    }

    return ( 
        <>
            <h1>Count : {count}</h1>
            <button on onClick={increment}>+</button>
        </> 
    )
}

export default Counter 