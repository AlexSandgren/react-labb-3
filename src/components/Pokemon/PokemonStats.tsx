interface IStatData {
    statData:{
        stat:{
            name:string
        },
        base_stat:number
    }[]
}


function PokemonStats({statData}:IStatData) {

    type StatMappings = {
        [key: string]: string
    }

    const getAbbreviatedStatName = (fullName: string) => {
        const statMappings: StatMappings = {
            //these mappings translate what the API gives us to a prettier format
            attack: 'ATK',
            defense: 'DEF',
            speed: 'SPE',
            'special-attack': 'SpA',
            'special-defense': 'SpD',
            hp: 'HP'
        }

        return statMappings[fullName] || fullName
    }


    return (
        <>
        <h5>Base stats</h5>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <td>Stat</td>
                            <td>Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {statData?.map((stat:any , index:number) => (
                            <tr key={index}>
                                <td>
                                    {getAbbreviatedStatName(stat.stat.name) ||
                                        ''}
                                </td>
                                <td>{stat.base_stat || ''}</td>
                            </tr>
                        ))}

                        {statData ? (
                            ''
                        ) : (
                            <>
                                <tr>
                                    <td>HP</td>
                                    <td>P</td>
                                </tr>
                                <tr>
                                    <td>ATK</td>
                                    <td>O</td>
                                </tr>
                                <tr>
                                    <td>DEF</td>
                                    <td>K</td>
                                </tr>
                                <tr>
                                    <td>SpA</td>
                                    <td>É</td>
                                </tr>
                                <tr>
                                    <td>SpD</td>
                                    <td>M</td>
                                </tr>
                                <tr>
                                    <td>SPE</td>
                                    <td>O</td>
                                </tr>
                            </>
                        )}
                        <tr>
                            <td>Total</td>
                            <td>
                                {statData?.reduce(
                                    // combines all base stat values
                                    (acc: number, curr: any) => {
                                        return acc + curr.base_stat
                                    },
                                    0
                                ) || 'N'}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </>

        );
}

export default PokemonStats;
