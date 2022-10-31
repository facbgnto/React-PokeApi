import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePokemonesConstext } from '../Context'
import Logo from '../assets/img/840_560.jpeg'

const Home =() =>{
      const pokemones = usePokemonesConstext();
        return (
            <>
             <div className='text-center pt-5'>
                  <h1 >Bienvenidos Maestro Pokemon</h1>
                  <img src={Logo} alt="Pokemon"  height="600"></img>
            </div>
            </>
      )
}

export default Home