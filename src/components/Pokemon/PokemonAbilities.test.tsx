import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PokemonAbilities from './PokemonAbilities'

describe('PokemonAbilities component', () => {
    let abilityData = [
        {
            ability: { name: 'inner-focus' },
            is_hidden: false
        },
        {
            ability: { name: 'truant' },
            is_hidden: false
        },
        {
            ability: { name: 'iron-fist' },
            is_hidden: true
        }
    ]

    it('renders abilities correctly', () => {
        const { getByText } = render(
            <PokemonAbilities abilityData={abilityData} />
        )

        const ability1 = getByText('Inner focus')
        const ability2 = getByText('Truant')
        const hiddenAbility = getByText('Iron fist')

        expect(ability1).toBeInTheDocument()
        expect(ability2).toBeInTheDocument()
        expect(hiddenAbility).toBeInTheDocument()
    })
})
