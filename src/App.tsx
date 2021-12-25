import React, { useState } from 'react';
import AvailableOptions from './components/AvailableOptions';
import EstimatedCost from './components/EstimatedCost';
import Header from './components/Header';

function App() {
  const [ step, setStep ] = useState<number>(0);
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
        <div className="w-2/3 h-[90vh] relative">
          <div className='h-full'>
            <AvailableOptions step={step} />
          </div>
          <div className='absolute bottom-0 space-x-5'>
            <button disabled={!step} onClick={handlePrevious}>Previous</button>
            <button disabled={step > 1} onClick={handleNext}>Next</button>
          </div>
        </div>
        <div className="w-1/3">
          <EstimatedCost />
        </div>
      </div>
    </div>
  );
}

export default App;
