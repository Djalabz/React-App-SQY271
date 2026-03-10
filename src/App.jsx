import Title from "./Title.jsx"
import Home from "./Home.jsx"
import Counter from "./Counter.jsx"
import Blog from "./Blog.jsx"
import Form from "./Form.jsx"
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
          <Link to="/blog">Blog</Link> |{" "}
          <Link to="/form">Form</Link> |{" "}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
