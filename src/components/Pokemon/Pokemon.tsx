'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import PokemonImage from './PokemonImage'
import PokemonType from './PokemonType'
import PokemonStats from './PokemonStats'
import PokemonAbilities from './PokemonAbilities'

interface IPokemonProps {
    value: string
    name: string
}

function Pokemon({ pokemon }: { pokemon: IPokemonProps }) {
    const [pokeInfo, setPokeInfo] = useState(null)
    console.log(pokeInfo)

    useEffect(() => {
        if (!pokemon.value) return
        console.log(pokemon)
        axios.get(pokemon.value).then((response) => {
            setPokeInfo(response.data)
        })
    }, [pokemon])

    return (
        <>
            <div className="poke-card">
                <PokemonImage spriteInfo={(pokeInfo as any)?.sprites} />
                <PokemonType typeData={(pokeInfo as any)?.types} />
                <PokemonStats statData={(pokeInfo as any)?.stats} />
                <PokemonAbilities abilityData={(pokeInfo as any)?.abilities} />
            </div>
        </>
    )
}

export default Pokemon
