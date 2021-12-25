import React from 'react'
import Frameworks from './Frameworks';
import Others from './Others';
import SiteTypes from './SiteTypes';

interface iProps {
    step: number;
}

const AvailableOptions: React.FC<iProps> = ({ step }) => {
    switch (step) {
        case 1:
            return <SiteTypes />
        case 2:
            return <Others />
        default:
            return <Frameworks />
    }
}

export default AvailableOptions
