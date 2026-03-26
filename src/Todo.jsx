// La TODO en React 

// 1 - Pouvoir supprimer une Todo -> En BDD mais aussui coté front visuellement
// 2 - Bonne idée : un message de confirmation avant suppression
// 3 - Il va donc falloir modifier React mais aussi notre API 


import { useState, useEffect } from "react"


function Todo() {
    // State d'une todo avec le contenu et le check
    const [inputValue, setInputValue] = useState({
        content: "",
        check: false
    })
    // State de la liste des todos à afficher
    const [todos, setTodos] = useState([])

    // Ici le useEffect se déclenche une fois lors du chargelment initial afin de recup les todos 
    // depuis la BDD et de les afficher 
    useEffect(() => {
        fetchTodos()
    }, []) 

    // Fonction qui vient recupérer avec un fetch les todos depuis la BDD
    async function fetchTodos() {
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
    }

    // Fonction qui ajoute une todo en BDD 
    async function addTodo() {
        return fetch("http://localhost:3000/todo/add", {
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
    }

    async function deleteTodo(id) {
        return fetch("http://localhost:3000/todo/delete", {
            method: "DELETE",
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    // handleChange vient modifier le state de la todo en cours liée à la valeur de l'input
    function handleChange(e) {
        setInputValue({ ...inputValue, content: e.target.value })
    }

    // Fonction qui vient appeller addTodo (afin d'enregistrer en BDD)
    // Elle met aussi à jour le tableau de todos
    function handleAddTodo() {
        if (inputValue.content != "") {
            // On appelle addTodo et on attend le résultat de cette opération avant de passer à l'opération suivante
            addTodo()
            .then(() => setTodos([ ...todos, inputValue]))
            .catch(err => console.log(err))
        }
    }

    function handleDeleteTodo(id) {
        deleteTodo(id)
        .then(() => setTodos(todos.filter(todo => todo.id != id)))
        .catch(err => console.log(err))
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

            {/* On vient lister l'ensemble des todos contenues dans le state todos  */}
            { todos && todos.map((todo, index) => (
                <div key={index} className="todo">
                    <p>{todo.content}</p>
                    <input type="checkbox" />
                    <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                </div>
            ))}

        </>
    );
}

export default Todo 