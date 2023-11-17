import Image from 'next/image'

function PokemonImage({ spriteInfo }: any) {
    return (
        <Image
            alt=""
            className="poke-image"
            width="96"
            height="96"
            src={
                (spriteInfo?.versions['generation-v']['black-white'].animated
                    .front_default
                    ? spriteInfo.versions['generation-v']['black-white']
                          .animated.front_default
                    : spriteInfo?.front_default) ||
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png?20161126061739'
            }
        />
    )
}

export default PokemonImage
