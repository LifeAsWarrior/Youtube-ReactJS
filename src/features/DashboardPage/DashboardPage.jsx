import React from 'react'
import pokemon from '../../pokemon.json'

export function DashboardPage() {
    console.log(pokemon)
    return (
        <div className='p-4'>
            <table className='w-full'>
                <thead>
                    <th className='text-left border border-b-gray-200 p-2'>Name</th>
                    <th className='text-left border border-b-gray-200 p-2'>Type</th>
                    <th className='text-left border border-b-gray-200 p-2'>HP</th>
                    <th className='text-left border border-b-gray-200 p-2'>Attack</th>
                    <th className='text-left border border-b-gray-200 p-2'>Defense</th>
                    <th className='text-left border border-b-gray-200 p-2'>Sp. Attack</th>
                    <th className='text-left border border-b-gray-200 p-2'>Sp. Defense</th>
                    <th className='text-left border border-b-gray-200 p-2'>Speed</th>
                </thead>
                <tbody>
                    {pokemon.slice(0,10).map((item) => (
                        <tr>
                            <td className='border border-b-gray-200 p-2'>{item.name.english}</td>
                            <td className='border border-b-gray-200 p-2'>{item.type[0]}</td>
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