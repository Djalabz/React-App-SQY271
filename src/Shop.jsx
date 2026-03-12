import { useState, useEffect } from "react"

function Shop() {
    const [check, setCheck] = useState(false)

    useEffect(() => {

    }, [])

    return ( 
    <>
        <button onClick={() => setCheck(!check)}>Check</button>
    </>
    );
}

export default Shop 