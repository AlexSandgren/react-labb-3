import { Converter } from 'showdown'
import fs from 'fs'
import path from 'path'
import '../page-styling.css'

export const metadata = {
    title: 'Pokémon roles',
    description: 'a nice description'
}

const Page = () => {
    const conv = new Converter()

    const content = fs.readFileSync(path.join('static', 'Roles.md'), 'utf-8')

    const converted = conv.makeHtml(content)

    return <div dangerouslySetInnerHTML={{ __html: converted }}></div>
}
export default Page
