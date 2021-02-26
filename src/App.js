import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import BodyContainer from "./components/Body/BodyContainer";



function  App () {
        return (
            <div className="App">
                <div className='header'>
                    <HeaderContainer/>
                </div>
                <div className='body'>
                    <BodyContainer/>
                </div>
            </div>
        )
    }


export default App;
