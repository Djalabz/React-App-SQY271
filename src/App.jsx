import Title from "./Title.jsx"
import Home from "./Home.jsx"
import Counter from "./Counter.jsx"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Ceci est un composant fonctionnel en Reat
function App() {
  // 1 - Données (state, variables etc)

  // 2 - Opérations (en gros les fonctions) 

  // 3 - La vue, cad le JSX qui s'affichera sur notre page
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
