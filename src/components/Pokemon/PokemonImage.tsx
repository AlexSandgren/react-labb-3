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
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pokeball.png/640px-Pokeball.png'
            }
        />
    )
}

export default PokemonImage
