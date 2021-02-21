import React from 'react'

const PokeInfo = (props) => {

    return (
        <div>
            {
                props.pokemons.map(p => <div key={p.id}>
                        <div>
                            {p.name}
                        </div>
                    </div>
                )

            }
        </div>
    )
}
export default PokeInfo