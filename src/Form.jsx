import { useState } from 'react';


function Form() {
    const [inputValue, setInputValue] = useState({
        email: "",
        username: "",
        password: "",
        confirm: ""
    })

    function updateInputs(event) {
        setInputValue({ ...inputValue, [event.target.name] : event.target.value })
    } 


    return ( 
        <>
    
            <h2>Formulaire de Signup</h2>

            <input 
                type="email" 
                name="email" 
                placeholder='Ici votre email' 
                value={inputValue.email}
                onChange={(e) => updateInputs(e)}
                required
            />

            <input 
                type="text" 
                name="username" 
                placeholder='Ici votre username' 
                value={inputValue.username}
                onChange={(e) => updateInputs(e)}
                required
            />

            <input 
                type="password" 
                name="password" 
                placeholder='Ici votre password' 
                value={inputValue.password}
                onChange={(e) => updateInputs(e)}
                required
            />

            <input 
                type="confirm-password" 
                name="confirm" 
                placeholder='Ici confirmer votre password' 
                value={inputValue.confirm}
                onChange={(e) => updateInputs(e)}
                required
            />

            <button>Signup</button>

        </>
    )
}

export default Form 