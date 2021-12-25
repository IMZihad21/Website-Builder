import React from 'react'
import { costType } from '../types/Types';

const Frameworks: React.FC<{ cost: costType, setCost: any }> = ({ setCost, cost }) => {
    const frameworks: Array<{ name: string, summary: string, cost: number }> = [
        { name: 'Python', summary: 'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.', cost: 200 },
        { name: 'Wordpress', summary: 'WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes.', cost: 300 },
        { name: 'Php Laravel', summary: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.', cost: 400 },
        { name: 'Php (From Scratch)', summary: 'PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.', cost: 500 },
        { name: 'Kajabi', summary: 'Kajabi is an all-in-one business platform for knowledge entrepreneurs. Kajabi makes it easy to build, market and sell your online courses, membership sites, coaching program and more. Best of all, you won’t need to learn code or have to worry about plugins or broken integrations.', cost: 600 }
    ]

    const handleClick = (frameworkCost: number) => {
        setCost({ ...cost, framework: frameworkCost })

    };

    return (
        <div className='h-full'>
            <h1 className='text-center font-medium text-2xl'>I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</h1>
            <ul className='px-32'>
                {
                    frameworks.map((framework, index) =>
                        <li key={`framework-${index}`}>
                            <button
                                onClick={() => handleClick(framework.cost)}
                                className='p-4 h-24 shadow-md border-2 block border-gray-200 focus:border-primary hover:border-primary text-left my-1 overflow-hidden'>
                                <h2 className='font-bold'>{framework.name}</h2>
                                <p>{framework.summary}</p>
                            </button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Frameworks
