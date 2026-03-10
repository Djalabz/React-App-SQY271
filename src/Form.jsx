import { useState } from 'react'
import Input from "./Input.jsx"


// Ajouter un bouton qui permette de sélectionner entre Signup et Login 
// Selon cette sélection afficher les bons inputs 

function Form() {
    const [inputValue, setInputValue] = useState({
        email: "",
        username: "",
        password: "",
        confirm: ""
    })


    const updateInputs = (event) =>  {
        setInputValue({ ...inputValue, [event.target.name] : event.target.value })
    } 

    return ( 
        <>
            <h2>Formulaire de Signup</h2>

            <Input 
                type="text" 
                name="email" 
                onChange={updateInputs} 
                inputValue={inputValue} 
            />
            <Input 
                type="text" 
                name="username" 
                onChange={updateInputs} 
                inputValue={inputValue} 
            />
            <Input 
                type="password" 
                name="password" 
                onChange={updateInputs} 
                inputValue={inputValue} 
            />
            <Input 
                type="password" 
                name="confirm" 
                onChange={updateInputs} 
                inputValue={inputValue} 
            />

            <button>Signup</button>

        </>
    )
}

export default Form 