interface ITypeData {
    typeData: {
        type: {
            name: string
        }
    }[]
}

function PokemonType({ typeData }: ITypeData) {
    type TypeMappings = {
        [key: string]: string
    }

    const getTypeColor = (typeName: string) => {
        const colorMappings: TypeMappings = {
            fire: '#F08030',
            water: '#6890F0',
            grass: '#78C850',
            bug: '#A8B820',
            ground: '#E0C068',
            rock: '#B8A038',
            steel: '#B8B8D0',
            poison: '#A040A0',
            flying: '#A890F0',
            ice: '#98D8D8',
            dragon: '#9260EF',
            electric: '#FAD361',
            dark: '#705848',
            psychic: '#F85888',
            fairy: '#EE99AC',
            ghost: '#705898',
            fighting: '#C03028'
        }

        return colorMappings[typeName] || false
    }

    return (
        <div className="poke-types-container">
            {typeData ? (
                typeData.map((type: any, index: number) => {
                    const typecolor = getTypeColor(type.type.name)
                    //add white-space: pre-wrap to make sure the leading space does not get removed
                    return (
                        <div key={index} className="type-text-container">
                            <h6
                                className="type-text"
                                style={{
                                    backgroundColor: typecolor || 'white'
                                }}
                            >
                                {type?.type.name
                                    .charAt(0)
                                    .toUpperCase()
                                    .concat(type.type.name.slice(1))}
                            </h6>
                        </div>
                    )
                })
            ) : (
                <h6>No abilites available</h6>
            )}
        </div>
    )
}

export default PokemonType
