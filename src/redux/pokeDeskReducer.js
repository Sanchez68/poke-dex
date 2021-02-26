import {pokemonsAPI} from "../API/api";

const SET_POKEMONS = 'SET_POKEMONS'
const SET_NEW_POKEMONS = 'SET_NEW_POKEMONS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    pokemons: [],
    pageLimit: 12,
    isFetching: true
}

export const pokeDeskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons
            }
            case SET_NEW_POKEMONS:
            return {
                ...state,
                newPokemons: [...action.pokemons],
                nextPage: action.nextPage
            }
        case
        TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS, pokemons
})
export const setNewPokemons = (newPokemons, nextPage) => ({
    type: SET_NEW_POKEMONS, newPokemons,nextPage
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})


export const newArrayData = (data)  => async (dispatch) => {
    return Promise.all(data.map( async p=> {
   // const getNewData =
        return await pokemonsAPI.getUrlData(p.url)
}))
}

export const requestPokemons = (pageLimit) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const data = await pokemonsAPI.getPokemons(pageLimit)
        const newData = await dispatch(newArrayData(data.results))
        dispatch(setPokemons(newData))
        dispatch(toggleIsFetching(false))
    }
}



export const requestLoadMore = (url) => {
    return async (dispatch) => {
        const data = await pokemonsAPI.getNewPokemons(url)
    }
}