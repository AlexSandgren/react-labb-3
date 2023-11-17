import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PokemonAbilities from './PokemonAbilities'

describe('PokemonAbilities component', () => {
    let abilityData = [
        {
            ability: { name: 'ability1' },
            is_hidden: false
        },
        {
            ability: { name: 'ability2' },
            is_hidden: false
        },
        {
            ability: { name: 'hiddenAbility' },
            is_hidden: true
        }
    ]

    it('renders abilities correctly', () => {
        const { getByText } = render(
            <PokemonAbilities abilityData={abilityData} />
        )

        const ability1 = getByText('Ability1') // Replace 'Ability1' with the formatted expected name
        const ability2 = getByText('Ability2') // Replace 'Ability2' with the formatted expected name
        const hiddenAbility = getByText('HiddenAbility') // Replace 'HiddenAbility' with the formatted expected name

        expect(ability1).toBeInTheDocument()
        expect(ability2).toBeInTheDocument()
        expect(hiddenAbility).toBeInTheDocument()
    })

    // Add more test cases to cover different scenarios and edge cases of your component
})
