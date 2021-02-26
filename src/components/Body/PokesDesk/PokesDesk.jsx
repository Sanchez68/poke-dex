import React from 'react'
import styles from "./PokesDesk.module.css"


const PokesDesk = (props) => {
    return (

            <div>
                <div>
                    {
                        props.pokemons.map(p => <div key={p.id}>
                                <div>
                                    <div>   {p.id}</div>
                                   {/*// <div>{p.abilities[0].ability.name}</div>*/}


                                </div>
                            </div>
                        )

                    }                    </div>
                <div>
                <button className={styles.loadMore} onClick={()=> {
                    props.requestLoadMore(props.next)
                }}>
                    Load More
                </button>
                </div>
            </div>

    )
}

export default PokesDesk