import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {pokeInfoReducer} from "./pokeInfoReducer";

let reducers = combineReducers({
    pokeInfo: pokeInfoReducer
})



const store = createStore(reducers, applyMiddleware(thunkMiddleware) )

export default store