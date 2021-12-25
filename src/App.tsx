import React, { useState } from 'react';
import AvailableOptions from './components/AvailableOptions';
import EstimatedCost from './components/EstimatedCost';
import Header from './components/Header';
import { costType } from './types/Types';

function App() {
  const [ step, setStep ] = useState<number>(0);
  const [ cost, setCost ] = useState<costType>({ framework: 0, site: 0, others: 0 });
  const handlePrevious = () => {
    const newStep: number = step - 1;
    setStep(newStep);
  }
  const handleNext = () => {
    const newStep: number = step + 1;
    setStep(newStep);
  }

  return (
    <div>
      <Header />
      <div className='flex px-20'>
        <div className="w-2/3 h-[90vh]">
          <div className='p-10 h-[85vh]'>
            <AvailableOptions step={step} cost={cost} setCost={setCost} />
          </div>
          <div className='space-x-5 text-primary text-xl flex justify-center font-bold'>
            <button className='disabled:text-gray-400 ' disabled={!step} onClick={handlePrevious}>Previous</button>
            <div className='w-52 bg-gray-200 h-3 mt-3 rounded'>
              <div className='bg-blue-600 h-3 rounded' style={{ width: step === 0 ? '33%' : step === 1 ? '66%' : '100%' }}></div>
            </div>
            <button className='disabled:text-gray-400' disabled={step > 1} onClick={handleNext}>Next</button>
          </div>
        </div>
        <div className="w-1/3">
          <EstimatedCost cost={cost} />
        </div>
      </div >
    </div >
  );
}

export default App;
