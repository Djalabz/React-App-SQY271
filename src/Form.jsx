import { useState } from 'react'
import Input from "./Input.jsx"

// PREMIER EXO REACT -> API NODE (à faire à la fois coté React et coté Node)
// Faire fonctionner notre app React avec notre nouvelle API express
// Faire une req simple en POST -> lorsque l'on clique sur Login on doit envoyer email et mdp vers l'API (utiliser fetch ou axios)
// Afficher ces infos dans la console (ou autre) de l'API mais aussi renvoyer vers react un message de confirmation


// Ajouter un bouton qui permette de sélectionner entre Signup et Login 
// Selon cette sélection afficher les bons inputs 
function Form() {
    const [inputValue, setInputValue] = useState({
        email: "",
        username: "",
        password: "",
        confirm: ""
    })

    const [isLogin, setIsLogin] = useState(false)

    const updateInputs = (event) =>  {
        setInputValue({ ...inputValue, [event.target.name] : event.target.value })
    } 

    async function handleLogin() {

        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(inputValue),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })

        const data = await res.json()

        console.log(data)
    }

    return ( 
        <>
            <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Signup" : "Login"}</button>

            { isLogin ?

                <>
                    <h2>Formulaire de Login</h2>

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

                    <button onClick={() => handleLogin()}>Login</button>

                </>         

            :
            
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
            }

        </>
    )
}

export default Form 