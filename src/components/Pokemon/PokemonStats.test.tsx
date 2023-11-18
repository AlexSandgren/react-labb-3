import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PokemonStats from './PokemonStats'

describe('PokemonStats component', () => {
    let statData = [
        {
            stat: { name: 'hp' },
            base_stat: 100
        },
        {
            stat: { name: 'attack' },
            base_stat: 100
        },
        {
            stat: { name: 'defense' },
            base_stat: 100
        },
        {
            stat: { name: 'special-attack' },
            base_stat: 100
        },
        {
            stat: { name: 'special-defense' },
            base_stat: 100
        },
        {
            stat: { name: 'speed' },
            base_stat: 100
        }
    ]

    it('renders stats without crashing and gives them the correct abbreviations', () => {
        const { getByText } = render(<PokemonStats statData={statData} />)

        const hp = getByText('HP')
        const atk = getByText('ATK')
        const def = getByText('DEF')
        const spa = getByText('SpA')
        const spd = getByText('SpD')
        const spe = getByText('SPE')

        expect(hp).toBeInTheDocument()
        expect(atk).toBeInTheDocument()
        expect(def).toBeInTheDocument()
        expect(spa).toBeInTheDocument()
        expect(spd).toBeInTheDocument()
        expect(spe).toBeInTheDocument()
    })
})
