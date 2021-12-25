import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='flex justify-between px-20 border-b border-black py-3'>
            <p className='space-x-2'>
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
            </p>
            <p className='font-medium'>WANT TO DISCUSS YOUR PROJECT IN DETAIL? <span className='font-bold text-primary'>SCHEDULE A CALL HERE</span></p>
            <p className='space-x-2'>
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
                <FontAwesomeIcon icon={faCircle} />
            </p>
        </div>
    )
}

export default Header
