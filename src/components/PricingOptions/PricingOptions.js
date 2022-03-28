import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../benefits/Benefits';


const PricingOptions = (props) => {
     const {name,price,benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl '>{name}</h2>
       <p>
       <span className='text-5xl font-bold '> {price}</span>
            <span className='text-xl font-bold text-gray-500 '> /mo</span>
       </p>
       <div className='p-4'>
           <h3 className='text-xl text-left'> Benefits:</h3>
           {
          benefits.map(benefit => <Benefits key={benefit.id} benefit={benefit}> </Benefits>)
           }
       
       </div>
       <button className='bg-green-500 flex justify-center w-full y-2 rounded mt-6 p-2 text-white hover:text-gray-700 font-bold '> Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon> </button>

        </div>
    );
};

export default PricingOptions;