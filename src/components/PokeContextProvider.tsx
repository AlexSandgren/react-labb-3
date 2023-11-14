import { createContext, useContext, Dispatch } from 'react'

function PokeContextProvider() {
    interface PokeState {
        baseUrl: 'https://pokeapi.co/api/v2/'
        poke1: string
        poke2: string
    }

    type PokeAction =
        | { type: 'set_pokemon_1'; input: string }
        | { type: 'set_pokemon_2'; input: string }

    const PokeContext = createContext<
        { state: PokeState; dispatch: Dispatch<PokeAction> } | undefined
    >(undefined)

    return <></>
}

export default PokeContextProvider
