import React, { useEffect, useState } from 'react'
import { costType } from '../types/Types'

const Others: React.FC<{ cost: costType, setCost: any }> = ({ setCost, cost }) => {
    const [ newUX, setNewUX ] = useState<number>(0);
    const [ payment, setPayment ] = useState<number>(0);
    const [ pages, setPages ] = useState<number>(1);

    useEffect(() => {
        setCost({ ...cost, others: newUX + payment + (pages * 75) })
    }, [ newUX, payment, pages, setCost, cost ])

    return (
        <div className='h-full text-center'>
            <div>
                <h1 className='text-center font-medium text-2xl'>DO YOU HAVE UX DESIGN READY?</h1>
                <div className='my-5 space-x-5'>
                    <button onClick={() => setNewUX(0)} className={`py-2 px-6 shadow-md border hover:border-primary ${!newUX ? 'border-primary' : 'border-transparent'}`}>Yes</button>
                    <button onClick={() => setNewUX(500)} className={`py-2 px-6 shadow-md border hover:border-primary ${newUX ? 'border-primary' : 'border-transparent'}`}>No</button>
                </div>
            </div>
            <div>
                <h1 className='text-center font-medium text-2xl'>HOW MANY WEBPAGES DO YOU WANT FOR YOUR
                    PUBLIC WEBSITE?</h1>
                <div className='my-5'>
                    <p>{pages} Pages</p>
                    <input style={{ background: `linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + ${pages} + '%, #fff ' + ${pages} + '%, white 100%)` }} type="range" className="form-range rounded-xl h-2 appearance-none w-72 p-0 bg-gray-200 focus:outline-none  focus:ring-0 focus:shadow-none" min={1} max={10} step={1} defaultValue={1} onChange={(e) => setPages(parseInt(e.target.value))} />
                </div>
            </div>
            <div>
                <h1 className='text-center font-medium text-2xl'>ANY PAYMENT GATEWAY INTEGRATION?</h1>
                <div className='my-5 space-x-5'>
                    <button onClick={() => setPayment(250)} className={`py-2 px-6 shadow-md border hover:border-primary ${(payment === 250) ? 'border-primary' : 'border-transparent'}`}>Stripe</button>
                    <button onClick={() => setPayment(200)} className={`py-2 px-6 shadow-md border hover:border-primary ${(payment === 200) ? 'border-primary' : 'border-transparent'}`}>PayPal</button>
                    <button onClick={() => setPayment(400)} className={`py-2 px-6 shadow-md border hover:border-primary ${(payment === 400) ? 'border-primary' : 'border-transparent'}`}>Both</button>
                    <button onClick={() => setPayment(0)} className={`py-2 px-6 shadow-md border hover:border-primary ${(payment === 0) ? 'border-primary' : 'border-transparent'}`}>None</button>
                </div>
            </div>
        </div>
    )
}

export default Others
