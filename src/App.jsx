import Title from "./Title.jsx"

// Ceci est un composant fonctionnel en Reat
function App() {
  // 1 - Données (state, variables etc)
  let props = {
    name: "romain", 
    age: 35
  }

  // 2 - Opérations (en gros les fonctions) 

  // 3 - La vue, cad le JSX qui s'affichera sur notre page
  return (
    <>
      <Title props={props}/>

      

    </>
  )
}

export default App
