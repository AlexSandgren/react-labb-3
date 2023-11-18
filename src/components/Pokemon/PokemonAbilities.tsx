interface AbilityProps {
    abilityData: {
        ability: {
            name: string
        }
        is_hidden: boolean
    }[]
}

function formatAbilityName(abilityName: string): string {
    return (
        abilityName.charAt(0).toUpperCase() +
        abilityName.slice(1).replace('-', ' ')
    )
}

function PokemonAbilities({ abilityData }: AbilityProps) {
    if (!abilityData || abilityData.length === 0) {
        return <p>No abilities available.</p>
    }

    const ability1Name =
        abilityData[0]?.ability.name &&
        formatAbilityName(abilityData[0].ability.name)
    const ability2Name = abilityData[1]?.is_hidden
        ? 'None'
        : abilityData[1]?.ability.name &&
          formatAbilityName(abilityData[1].ability.name)
    const hiddenAbilityName = abilityData[1]?.is_hidden
        ? formatAbilityName(abilityData[1].ability.name)
        : abilityData[2]?.ability.name &&
          formatAbilityName(abilityData[2].ability.name)

    return (
        <>
            <h5>Abilities</h5>
            <table className="table table-striped">
                <thead>
                    <tr><td>First</td><td>Second</td><td>Hidden</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='ability-row'>{ability1Name || 'None'}</td>
                        <td className='ability-row'>{ability2Name || 'None'}</td>
                        <td className='ability-row'>{hiddenAbilityName || 'None'}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PokemonAbilities
