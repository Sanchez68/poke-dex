import React from 'react'
import {connect} from "react-redux";
import Body from "./Body";

const BodyContainer = (props) => {
return (
    <div>

    <Body/>
    </div>
    )
}

let mapStateToProps = (state) =>{
    return  {}
}
export default connect(mapStateToProps,{})(BodyContainer)