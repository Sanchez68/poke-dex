import React from 'react'
import {connect} from "react-redux";
import Body from "./Body";

const BodyContainer = () => {
return (
    <div>
    <Body/>
    </div>
    )
}

let mapStateToProps = () =>{
    {}
}
export default connect(mapStateToProps,{})(BodyContainer)