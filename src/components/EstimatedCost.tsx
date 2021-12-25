import React, { useEffect, useState } from 'react'
import { costType } from '../types/Types'

interface iProps {
    cost: costType;
}

const EstimatedCost: React.FC<iProps> = ({ cost }) => {
    const [ estCost, setEstCost ] = useState<number>(0);

    useEffect(() => {
        setEstCost(cost.framework + cost.site + cost.others)
    }, [ cost ])

    if (cost.framework === 0 || cost.site === 0) {
        return <div className='text-center text-xl mt-20'>PLEASE INPUT ALL THE FIELDS TO
            SHOW ESTIMATED PRICE</div>
    }

    return (
        <div>
            <div className='text-center mt-20 mx-3 p-10 shadow-lg'>
                <h2 className='text-primary text-xl'>Est Cost</h2>
                <p className='text-2xl font-bold my-1'>${estCost}-${estCost + 500}</p>
                <p>"This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to development. Project will be divided into 2 - 3 milestone payments."</p>
            </div>
            <div className='flex justify-center mt-20'>
                <button className='p-3 bg-primary text-white rounded-sm'>START YOUR PROJECT NOW</button>
            </div>
        </div>
    )
}

export default EstimatedCost
