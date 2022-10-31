import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navegation";
import  Home  from "./views/Home";
import Pokemones from './views/Pokemones'
import Pokemon from './views/Pokemon'
// import { useEffect } from "react";
// import { fetchPokemones } from "./api";
import AppContextProvider , { usePokemonesConstext } from './Context'

function App() {
  const  pokemones  = usePokemonesConstext();


  return (
              <BrowserRouter basename='React-PokeApi'>
                <Navbar></Navbar>           
                        <Routes>
                            <Route path="/" element={<Home />} index/>
                            <Route path="/Pokemones" element={<Pokemones />} /> 
                            <Route path="/Pokemon/:name" element={<Pokemon />} /> 
                        </Routes>
              </BrowserRouter>
  );
}

export default App;
