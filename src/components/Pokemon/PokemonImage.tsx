import Image from 'next/image'

function PokemonImage({ spriteInfo }: any) {
    return (
        <div style={{width: '100%', height: '100px', position: 'relative'}}>
        <Image
            style={{maxHeight:'100px'}}
            alt=""
            className="poke-image"
            fill={true}
            objectFit='contain'
            src={
                (spriteInfo?.versions['generation-v']['black-white'].animated
                    .front_default
                    ? spriteInfo.versions['generation-v']['black-white']
                          .animated.front_default
                    : spriteInfo?.front_default) ||
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pokeball.png/640px-Pokeball.png'
            }
        />
        </div>
    )
}

export default PokemonImage
