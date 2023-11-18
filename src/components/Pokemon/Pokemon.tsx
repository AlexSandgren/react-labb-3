import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import PokemonImage from './PokemonImage'
import PokemonType from './PokemonType'
import PokemonStats from './PokemonStats'
import PokemonAbilities from './PokemonAbilities'
import PokemonEvolutions from './PokemonEvolutions'

interface IPokemonProps {
    value: string
    name: string
}

type PokeInfo = {
    species: {
        url: string
        name: string
    }
}

function Pokemon({ pokemon }: { pokemon: IPokemonProps }) {
    const [pokeInfo, setPokeInfo] = useState<PokeInfo | undefined>(undefined)

    const [pokeSpeciesInfo, setPokeSpeciesInfo] = useState(null)
    console.log(pokeInfo)
    console.log(pokeSpeciesInfo)
    useEffect(() => {
        const fetchData = async () => {
            if (!pokemon.value) return

            try {
                const response = await axios.get(pokemon.value)
                setPokeInfo(response.data)
            } catch (error) {
                // Handle errors here
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [pokemon])

    useEffect(() => {
        if (pokeInfo && pokeInfo.species && pokeInfo.species.url) {
            const fetchSpeciesData = async () => {
                try {
                    const speciesResponse = await axios.get(
                        pokeInfo.species.url
                    )
                    setPokeSpeciesInfo(speciesResponse.data)
                } catch (error) {
                    // Handle errors here
                    console.error('Error fetching species data:', error)
                }
            }

            fetchSpeciesData()
        }
    }, [pokeInfo])

    return (
        <>
            <div className="poke-card">
                <PokemonImage spriteInfo={(pokeInfo as any)?.sprites} />
                <PokemonType typeData={(pokeInfo as any)?.types} />
                <PokemonStats statData={(pokeInfo as any)?.stats} />
                <PokemonAbilities abilityData={(pokeInfo as any)?.abilities} />
                <PokemonEvolutions pokeSpeciesInfo={pokeSpeciesInfo} />
            </div>
        </>
    )
}

export default Pokemon
