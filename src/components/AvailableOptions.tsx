import React from 'react'
import { costType } from '../types/Types';
import Frameworks from './Frameworks';
import Others from './Others';
import SiteTypes from './SiteTypes';

interface iProps {
    step: number;
    cost: costType;
    setCost: Function;
}

const AvailableOptions: React.FC<iProps> = ({ step, cost, setCost }) => {
    switch (step) {
        case 1:
            return <SiteTypes cost={cost} setCost={setCost} />
        case 2:
            return <Others cost={cost} setCost={setCost} />
        default:
            return <Frameworks cost={cost} setCost={setCost} />
    }
}

export default AvailableOptions
