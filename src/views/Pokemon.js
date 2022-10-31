import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router'
import PokemonCars from '../Components/PokemonCars'
import {fetchPokemon} from '../api'
import loading from '../assets/img/loading.gif'

function Pokemon() {
  const [dataPokemon, setDataPokemon] = useState();
  const {name} = useParams();
  useEffect(() => {
    fetchPokemon(name)
    .then((data) => setDataPokemon(data))
    .catch(e => console.log(e.message))
   
  },[]
  )

  console.log(dataPokemon)
  return (
    <>
    {
      !dataPokemon ?   <div className='loading'><img src={loading}></img> </div>: <PokemonCars {...dataPokemon}> </PokemonCars>
    }
    </>
    
  )
}

export default Pokemon