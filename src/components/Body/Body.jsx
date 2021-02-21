import React from 'react'
import styles from "./Body.module.css"
import PokesDeskContainer from "./PokesDesk/PokesDeskContainer";
import PokeInfoContainer from "./PokeInfo/PokeInfoContainer";


const Body = (props) => {
    return (
        <div className={styles.BodyMain}>
            <div  className={styles.PokesDeskMain}>
                <PokesDeskContainer/>
            </div>
            <div className={styles.PokeInfoMain}>
                <PokeInfoContainer/>
            </div>
        </div>

    )
}

export default Body