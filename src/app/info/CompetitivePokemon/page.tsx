import { Converter } from 'showdown'
import fs from 'fs'
import path from 'path'
import '../page-styling.css'

export const metadata = {
    title: 'Competitive Pokémon',
    description: 'a nice description'
}

const Page = () => {
    const conv = new Converter()

    const content = fs.readFileSync(
        path.join('static', 'Competitive_pokemon.md'),
        'utf-8'
    )

    const converted = conv.makeHtml(content)
    return <div dangerouslySetInnerHTML={{ __html: converted }}></div>
}
export default Page
