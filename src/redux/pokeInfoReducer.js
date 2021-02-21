import {pokemonsAPI} from "../API/api";

const SET_POKEMONS = 'SET_POKEMONS'

let initialState = {
    pokemons: [],
    currentPage: 1,
    pageLimit: 12
}

export const pokeInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons
            }
        default:
            return state
    }
}

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS, pokemons
})


export const requestPokemons = (currentPage, pageLimit) => {
    return async (dispatch) => {
        const data = await pokemonsAPI.getPokemons(currentPage, pageLimit)

        dispatch(setPokemons(data.results))


    }
}