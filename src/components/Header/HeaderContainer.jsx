import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";

const HeaderContainer = () => {
return (
    <Header/>
    )
}

let mapStateToProps = () =>{
    {}
}
export default connect(mapStateToProps,{})(HeaderContainer)