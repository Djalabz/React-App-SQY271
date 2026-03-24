// La TODO en React 

// Ici vous devrez créer l'UI de la todo 
// On doit pouvoir ajouter une todo, modifier une todo, supprimer une todo 
// Cela doit etre visible à la fois coté front (React) mais aussi se traduire par les
// changements adequats en BDD -> Il va falloir adapter l'API 
import { useState, useEffect } from "react"


function Todo() {
    const [inputValue, setInputValue] = useState({
        content: "",
        check: false
    })
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/todo/", {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setTodos(data)
        })
        .catch(err => console.log(err))
    }, []) 

    useEffect(() => {
        fetch("http://localhost:3000/todo/add", {
            method: "POST",
            body: JSON.stringify(inputValue),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, [todos]) 

    function handleChange(e) {
        setInputValue({ ...inputValue, content: e.target.value })
    }

    function handleAddTodo() {
        if (inputValue.content != "") {
            setTodos([ ...todos, inputValue])
        }
    }

    return ( 
        <>
            <h1>Ma todo en React</h1>

            <input 
                type="text" 
                value={inputValue.content}
                onChange={(e) => handleChange(e)}
                placeholder="Votre todo ici ..."
            />

            <button onClick={() => handleAddTodo()}>Ajouter</button>


            { todos && todos.map((todo, index) => (
                <div key={index} className="todo">
                    <p>{todo.content}</p>
                    <input type="checkbox" />
                </div>
            ))}

        </>
    );
}

export default Todo 