import PokeContainer from '@/components/PokeContainer'
import RootLayout from './layout'
import { PokeProvider } from '@/components/PokeProvider'

export default function Home() {
    return (
        <>
            <PokeProvider>
                <PokeContainer />
            </PokeProvider>
        </>
    )
}
