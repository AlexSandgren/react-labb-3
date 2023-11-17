'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface IPokemonProps {
    value: string
    name: string
}

type PokeState = {
    baseUrl: 'https://pokeapi.co/api/v2/'
    poke1: IPokemonProps
    poke2: IPokemonProps
    setPoke1: Function
    setPoke2: Function
}

const PokeContext = createContext<PokeState | undefined>(undefined)

const PokeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [poke1, setPoke1] = useState({ name: '', value: '' })
    const [poke2, setPoke2] = useState({ name: '', value: '' })
    const baseUrl = 'https://pokeapi.co/api/v2/'

    const contextValue: PokeState = {
        baseUrl,
        poke1,
        poke2,
        setPoke1,
        setPoke2
    }

    return (
        <PokeContext.Provider value={contextValue}>
            {children}
        </PokeContext.Provider>
    )
}

const usePokeContext = () => {
    return useContext(PokeContext) as PokeState
}

export { PokeProvider, usePokeContext }
