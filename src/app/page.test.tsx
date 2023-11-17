import { getByTestId, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './page'

describe('Home component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<Home />)

        const app = getByTestId('app')
        expect(app).toBeInTheDocument()
    })
    // Add more test cases to cover different scenarios and edge cases of your component
})
