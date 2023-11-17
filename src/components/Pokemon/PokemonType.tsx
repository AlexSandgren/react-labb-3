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
            fire: '#FF4500',
            water: '#0000FF',
            grass: '#006400',
            bug: '#7FFF00',
            ground: '#F5DEB3',
            rock: '#A0522D',
            steel: '#708090',
            poison: '#663399',
            flying: '#87CEEB',
            ice: '#E0FFFF'
        }

        return colorMappings[typeName] || false
    }

    return (
        <div className="poke-types-container">
            {typeData ? (
                typeData.map((type: any, index: number) => (
                    //add white-space: pre-wrap to make sure the leading space does not get removed
                    <h6
                        key={index}
                        style={{
                            whiteSpace: 'pre-wrap',
                            color: getTypeColor(type.type.name) || 'black'
                        }}
                    >
                        {index === 1 ? (
                            <span style={{ color: 'black' }}>{' & '}</span>
                        ) : (
                            ''
                        )}
                        {type?.type.name
                            .charAt(0)
                            .toUpperCase()
                            .concat(type.type.name.slice(1))}
                    </h6>
                ))
            ) : (
                <h6>No abilites available</h6>
            )}
        </div>
    )
}

export default PokemonType
