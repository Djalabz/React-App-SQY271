import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1) 
    }

    let x = 32

    return ( 
        <>
            <h1>Count : {count}</h1>
            <button on onClick={increment}>+</button>

            { x == 32 && <h1>Oui on est bon !</h1> }
        </> 
    )
}

export default Counter 

