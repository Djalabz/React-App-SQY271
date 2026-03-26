// La TODO en React 

// Ici vous devrez créer l'UI de la todo 
// On doit pouvoir ajouter une todo, modifier une todo, supprimer une todo 
// Cela doit etre visible à la fois coté front (React) mais aussi se traduire par les
// changements adequats en BDD -> Il va falloir adapter l'API 
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
                </div>
            ))}

        </>
    );
}

export default Todo 