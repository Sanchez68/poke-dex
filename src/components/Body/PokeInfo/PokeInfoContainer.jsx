import React from 'react'
import {connect} from "react-redux";
import PokeInfo from "./PokeInfo";
import {requestPokemons, setPokemons} from "../../../redux/pokeInfoReducer";

class PokeInfoContainer extends React.Component {
    componentDidMount() {
        this.props.requestPokemons(this.props.currentPage, this.props.pageLimit)
    }

    render() {

        return (
            <div>
                <PokeInfo pageLimit={this.props.pageLimit}
                          currentPage={this.props.currentPage}
                          pokemons={this.props.pokemons}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        pokemons: state.pokeInfo.pokemons,
        pageLimit: state.pokeInfo.pageLimit,
        currentPage: state.pokeInfo.currentPage,
        totalPokeCount: state.pokeInfo.totalPokeCount
    }
}
export default connect(mapStateToProps, { setPokemons, requestPokemons})(PokeInfoContainer)