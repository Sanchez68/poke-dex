import React from 'react'
import {connect} from "react-redux";
import PokesDesk from "./PokesDesk";

const PokesDeskContainer = () => {
return (
    <div>
    <PokesDesk/>
    </div>
    )
}

let mapStateToProps = () =>{
    {}
}
export default connect(mapStateToProps,{})(PokesDeskContainer)