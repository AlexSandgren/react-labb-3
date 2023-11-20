'use client'
import PokeSearcher from './PokeSearcher'
import { usePokeContext } from './PokeProvider'
import Pokemon from './Pokemon/Pokemon'
import Link from 'next/link'

interface IPokemonProps {
    value: string
    name: string
}

function PokeContainer() {
    const { poke1, poke2 }: { poke1: IPokemonProps; poke2: IPokemonProps } =
        usePokeContext()

    return (
        <div className="poke-container">
            <Link href="/info/Roles">Pokemon roles</Link>
            <Link href="/info/Strategy">Pokemon Strategy</Link>
            <Link href="/info/CompetitivePokemon">Competitive Pokémon</Link>
            <h3>Pokémon searcher</h3>
            <div className="poke-boxes">
                <div className="poke-info">
                    <PokeSearcher pokeNumber={1}></PokeSearcher>
                    <Pokemon pokemon={poke1}></Pokemon>
                </div>
                <div className="poke-info">
                    <PokeSearcher pokeNumber={2}></PokeSearcher>
                    <Pokemon pokemon={poke2}></Pokemon>
                </div>
            </div>
        </div>
    )
}

export default PokeContainer
