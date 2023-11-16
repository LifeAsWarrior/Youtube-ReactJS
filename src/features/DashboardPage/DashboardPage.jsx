import React from 'react'

export function DashboardPage() {
    const [filter,setFilter] = React.useState('')
    const [pokemon,setPokemon] = React.useState([]) 

    React.useEffect(() => {
        fetch('http://localhost:3000/pokemon.json').then((res) => res.json()).then((res) => setPokemon(res.filter((item) => item.name.english.indexOf(filter) > -1)))
    },[filter])

    return (
        <div className='p-4'>
            <div className="border border-gray-500 flex items-center py-2 px-3 rounded-md w-96 mb-3">
            <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)} className='border-none w-full outline-none' placeholder='Search Pokemon ...'/>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='text-left border border-b-gray-200 p-2'>Name</th>
                        <th className='text-left border border-b-gray-200 p-2'>Type</th>
                        <th className='text-left border border-b-gray-200 p-2'>HP</th>
                        <th className='text-left border border-b-gray-200 p-2'>Attack</th>
                        <th className='text-left border border-b-gray-200 p-2'>Defense</th>
                        <th className='text-left border border-b-gray-200 p-2'>Sp. Attack</th>
                        <th className='text-left border border-b-gray-200 p-2'>Sp. Defense</th>
                        <th className='text-left border border-b-gray-200 p-2'>Speed</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.slice(0,10).map((item,index) => (
                        <tr key={index}>
                            <td className='border border-b-gray-200 p-2'>{item.name.english}</td>
                            <td className='border border-b-gray-200 p-2'>
                            <div style={{display: 'flex',alignItems: 'center'}}>
                                    {item.type.map((i) => (
                                    <span style={{
                                        backgroundColor: 'green',
                                        color: 'white',
                                        margin: '0px 10px 0px 10px',
                                        padding: '10px',
                                        borderRadius: 10,
                                        textAlign: 'center',
                                        width: '100px'
                                    }}>{i}</span>
                                ))}
                                </div>
                            </td>
                            <td className='border border-b-gray-200 p-2'>{item.base.HP}</td>
                            <td className='border border-b-gray-200 p-2'>{item.base.Attack}</td>
                            <td className='border border-b-gray-200 p-2'>{item.base.Defense}</td>
                            <td className='border border-b-gray-200 p-2'>{item.base['Sp. Attack']}</td>
                            <td className='border border-b-gray-200 p-2'>{item.base['Sp. Defense']}</td>
                            <td className='border border-b-gray-200 p-2'>{item.base.Speed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}