import { useEffect, createContext, useState, useContext } from "react";
import { fetchPokemones } from "./api";

const myContext = createContext();

export function usePokemonesConstext()  {
  return useContext(myContext);
};

function ContextProvider({ children }) {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetchPokemones(0, 150)
    .then((data) => setPokemones(data))
    .catch(e => console.log(e.message))
 });


  return (
        <myContext.Provider value={pokemones}>
            {children}
        </myContext.Provider>
  )
}

export default ContextProvider;
