import React from 'react'
import { costType } from '../types/Types'

const SiteTypes: React.FC<{ cost: costType, setCost: any }> = ({ setCost, cost }) => {
    const siteType: Array<{ name: string; summary: string; cost: number }> = [
        { name: 'An ecommerce site', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ', cost: 100 },
        { name: 'An online course platform', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ', cost: 200 },
        { name: 'A blog site', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ', cost: 300 },
        { name: 'My company website with price calculators', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ', cost: 400 }
    ]

    const handleClick = (siteCost: number) => {
        setCost({ ...cost, site: siteCost })

    };

    return (
        <div className='h-full'>
            <h1 className='text-center font-medium text-2xl'>I WANT TO BUILD</h1>
            <ul className='px-32'>
                {
                    siteType.map((sites, index) =>
                        <li key={`framework-${index}`}>
                            <button
                                onClick={() => handleClick(sites.cost)}
                                className='p-4 h-24 shadow-md border-2 block border-gray-200 focus:border-primary hover:border-primary text-left my-1 overflow-hidden'>
                                <h2 className='font-bold'>{sites.name}</h2>
                                <p>{sites.summary}</p>
                            </button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default SiteTypes
