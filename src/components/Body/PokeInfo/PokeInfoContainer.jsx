import React from 'react'
import {connect} from "react-redux";
import PokeInfo from "./PokeInfo";

class PokeInfoContainer extends React.Component {
    // componentDidMount() {
    //     this.props.requestPokemons( this.props.pageLimit)
    // }

    render() {

        return (
            <div>
                <PokeInfo
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps, { })(PokeInfoContainer)