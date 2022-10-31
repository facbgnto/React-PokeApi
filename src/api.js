// https://pokeapi.co/api/v2/pokemon/  para uno 
//https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150 para 150
/**
 * 
 * @param {number} offset  'es para indicar desde que pokenoib queremos recuperar'
 * @param {number} limit ' de los poqkemoners encontrados'
 * @returns {array}  '' de los poquemoneses encontrados 
 */
async function fetchPokemones(offset=0, limit=20){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=" + limit)
        const { results } = await response.json();
        return results
    } catch (e) {
        console.error(e.message)
        
    }
  

}

/**
 * @param {numbre} id  'es el identificador del pokemon' 
 * @returns {array}  ''
 */


async function fetchPokemon(name){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        const data = await response.json();
        return  data;
    } catch (e) {
        console.error(e.message)
        
    }
 }




export {
    fetchPokemones,
    fetchPokemon
}
