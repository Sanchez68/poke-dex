import React from 'react'
import {connect} from "react-redux";
import PokesDesk from "./PokesDesk";
import {requestLoadMore, requestPokemons, setPokemons} from "../../../redux/pokeDeskReducer";

class PokesDeskContainer extends React.Component{
    componentDidMount() {
        this.props.requestPokemons( this.props.pageLimit)
    }
    render() {
        return (
            <div>
                <PokesDesk
                    pageLimit={this.props.pageLimit}
                    pokemons={this.props.pokemons}
                />
            </div>
        )
    }
    }



let mapStateToProps = (state) =>{
    return{
        pokemons: state.pokeDeskLeft.pokemons,
        pageLimit: state.pokeDeskLeft.pageLimit,
        currentPage: state.pokeDeskLeft.currentPage,
    }
}
export default connect(mapStateToProps,{setPokemons, requestPokemons,requestLoadMore})(PokesDeskContainer)