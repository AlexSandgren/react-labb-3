import PokeContainer from '@/components/PokeContainer'
import { PokeProvider } from '@/components/PokeProvider'

export default function Home() {
    return (
        <div data-testid="app">
                <PokeProvider>
                    <PokeContainer />
                </PokeProvider>
        </div>
    )
}
