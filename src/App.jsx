import Title from "./Title.jsx"
import Home from "./Home.jsx"
import Counter from "./Counter.jsx"
import Blog from "./Blog.jsx"
import Form from "./Form.jsx"
import Quiz from "./Quiz.jsx"
import Shop from "./Shop.jsx"
import GeoQuiz from "./GeoQuiz.jsx"
import Random from "./Random.jsx"
import Todo from "./Todo.jsx"

//// Imports pour l'appBar de MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import fouine from "./assets/fouine-noBg.png"

import "./style/App.css"

import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//// TODO : 

// Faire un formulaire PROPRE à la fois Login et Signup avec des composants MUI et du CSS additionnel si besoin
// Faire de meme pour la Navbar, faire le plus propre possible 
// BONUS : Quand on lance l'app la homepage doit etre le login avec possibilité de basculer sur le signup



// Ceci est un composant fonctionnel en React
function App() {
  // 1 - Données (state, variables etc)
  const [openDrawer, setOpenDrawer] = useState(false) 

  const DrawerList = (

    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenDrawer(false)}>

      <List>
        {['Home', 'Blog', 'Quiz', 'Shop', 'Todo', 'Random'].map((text, index) => (
          <Link key={index} to={`/${text.toLowerCase()}`}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>))}
      </List>

      <Divider />

      <List>
        {['Profile', 'Preferences', 'Logout'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  // 2 - Opérations (en gros les fonctions) 

  // 3 - La vue, cad le JSX qui s'affichera sur notre page
  return (
    <>


        <Box className="appBar-box" sx={{ flexGrow: 1 }}>
          <AppBar position="static" >
            <Toolbar sx={{ width : 1024, maxWidth : 1280, margin: "auto", display:"flex", justifyContent: "space-between" }}>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
              >
                  <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
              </IconButton>

              <img className="logo" src={fouine} alt="fouiny baby" />

            </Toolbar>
          </AppBar>
        </Box>
      


      <BrowserRouter>
        {/* Navigation */}

        <div>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
             {DrawerList} 
          </Drawer>
        </div>


        {/* <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/blog">Blog</Link> |{" "}
          <Link to="/form">Form</Link> |{" "}
          <Link to="/quiz">Quiz</Link> |{" "}
          <Link to="/shop">Shop</Link> |{" "}
          <Link to="/geoquiz">Geoquiz</Link> |{" "}
          <Link to="/random">Random</Link> |{" "}
          <Link to="/todo">Todo</Link> |{" "}
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/form" element={<Form />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/geoquiz" element={<GeoQuiz />} />
          <Route path="/random" element={<Random/>} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
