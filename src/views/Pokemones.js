import React, { useState } from 'react'
import { usePokemonesConstext }  from '../Context'
import {useNavigate} from 'react-router-dom'


function Pokemones() {
  const pokemones = usePokemonesConstext();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState("");
  const handleOnChange = (e) => {
      setPokemon(e.target.value)
  }

  const irPokemon = ()  => {
      pokemon ? navigate('/Pokemon/' + pokemon) : alert("Seleciona un Pokemon")
      console.log(pokemon)
  }

  return (
    <>
      <div className='text-center pt-5'>
            <h2>Seleciona un Pokemon</h2>
            <div className="contener" >
            <select class="form-select form-select-sm mb-3"   defaultValue="" onChange={handleOnChange}>
              <option selected defaultValue="">Seleciones un Pokemon</option>
              {pokemones.map(pokemon => {
                return( <option key={pokemon.name} value={pokemon.name}> {pokemon.name}</option>
                  
                )
              })}
            </select>

              <button className='btn btn-warning text-white mt-3' onClick={irPokemon}> Ver Pokemon</button>
              </div>
            
      </div>
    </>
  
  )
}

export default Pokemones