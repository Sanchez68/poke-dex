import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://pokeapi.co/api/v2/`,
headers: {

}
})

export const pokemonsAPI = {
getPokemons(currentPage =1,pageLimit =12){
    return instance.get(`pokemon/?offset=${currentPage}&limit=${pageLimit}`)
        .then(response => {
debugger
           return response.data
    })
}}