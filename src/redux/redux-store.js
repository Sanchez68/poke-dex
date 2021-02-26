import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {pokeInfoReducer} from "./pokeInfoReducer";
import {pokeDeskReducer} from "./pokeDeskReducer";

let reducers = combineReducers({
    pokeInfoRight: pokeInfoReducer,
    pokeDeskLeft: pokeDeskReducer
})



//const store = createStore(reducers, applyMiddleware(thunkMiddleware) )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store