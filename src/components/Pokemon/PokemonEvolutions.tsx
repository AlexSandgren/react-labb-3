import { useState, useEffect } from 'react'
import axios from 'axios'
interface IEvoData {}

function PokemonEvolutions({ pokeSpeciesInfo }) {
    const [evoChain, setEvoChain] = useState(null)
    console.log(evoChain)
    console.log(pokeSpeciesInfo)
    useEffect(() => {
        if (!pokeSpeciesInfo) return
        axios
            .get(pokeSpeciesInfo?.evolution_chain.url)
            .then((response) => setEvoChain(response.data))
    }, [pokeSpeciesInfo])

    function formatPokemonName(pokemonName: string): string {
        if (pokemonName == null) return ''
        return (
            pokemonName.charAt(0).toUpperCase() +
            pokemonName.slice(1).replace('-', ' ')
        )
    }

    const firstEvo = formatPokemonName(evoChain?.chain.species.name) || ''
    const secondEvos =
        evoChain?.chain.evolves_to
            .map((evo) => formatPokemonName(evo.species.name))
            .join(' or ') || ''
    const thirdEvos =
        evoChain?.chain.evolves_to[0]?.evolves_to
            .map((evo) => formatPokemonName(evo.species.name))
            .join(' or ') || ''

    return (
        <>
            <h5>Evolutions</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>First</td>
                        <td>Second</td>
                        <td>Third</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="evolution-row">{firstEvo}</td>
                        <td className="evolution-row">{secondEvos}</td>
                        <td className="evolution-row">{thirdEvos}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PokemonEvolutions
