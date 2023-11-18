'use client'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { usePokeContext } from './PokeProvider'

type PokeSearcherProps = {
    pokeNumber: 1 | 2
}

function PokeSearcher({ pokeNumber }: PokeSearcherProps) {
    interface IPokemon {
        value: string
        label: string
    }

    const { baseUrl, setPoke1, setPoke2 } = usePokeContext()

    const [pokeList, setPokeList] = useState<IPokemon[] | undefined>(undefined)

    const handleChange = (poke: IPokemon | null) => {
        if (poke == null) return
        if (pokeNumber == 1) {
            setPoke1(poke)
        } else if (pokeNumber == 2) {
            setPoke2(poke)
        } else {
            console.log("What's happening?")
        }
    }

    const getPokemon = useEffect(() => {
        axios.get(`${baseUrl}pokemon?limit=1500&offset=0`).then((r) => {
            setPokeList(
                r.data.results.map((entry: { name: string; url: string }) => ({
                    value: entry.url,
                    label:
                        entry.name.charAt(0).toUpperCase() + entry.name.slice(1)
                }))
            )
        })
    }, [])

    return (
        <>
            {/*Really slow due to the large amount of data in options. Tried to make pagination work but couldn't
               API does not take filter parameters either so can't go that route.*/}
            <Select
                options={pokeList}
                onChange={(poke) => handleChange(poke)}
            />
        </>
    )
}

export default PokeSearcher
