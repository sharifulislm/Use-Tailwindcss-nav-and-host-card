import React from 'react';

const PricingOptions = (props) => {
     const {name,price} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl '>{name}</h2>
            <span className='text-5xl font-bold '> {price}</span>
            <span className='text-xl font-bold text-gray-500 '> /mo</span>
        </div>
    );
};

export default PricingOptions;