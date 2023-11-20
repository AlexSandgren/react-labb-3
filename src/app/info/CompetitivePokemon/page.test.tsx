import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from './page'

describe('Home component', () => {
    it('renders static content correctly', () => {
        const { getByText } = render(<Page />)

        const app = getByText('Competitive Pokémon and Battle Formats')
        expect(app).toBeInTheDocument()
    })
})
