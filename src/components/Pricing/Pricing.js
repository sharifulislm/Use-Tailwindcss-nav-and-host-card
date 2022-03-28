import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name:'Free',price:0},
        {id: 2, name:'Regular',price:9.99},
        {id: 3, name:'Premium',price:19.99},
    ]
    return (
        <div className='bg-indigo-300 p-4 m-t8'>
            <h1 className='text-6xl'> best deals of the club</h1>
                 <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iste maxime error corporis blanditiis tempora excepturi consequuntur facilis eius similique!</p>
       
       
      <div className='grid grid-cols-3 gap-3 mt-8'>
          {
              pricingOptions.map(option => <PricingOptions 
              key={option.id} option={option}
              > </PricingOptions>)
          }
      </div>

        </div>
       
    );
};

export default Pricing;