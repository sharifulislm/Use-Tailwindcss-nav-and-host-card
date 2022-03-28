import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Benefits = (props) => {
 

    // const {benefits}=props;
    return (
        <p className='flex items-center pt-2'>
        <CheckCircleIcon className='w-4 h-4 text-green-500'></CheckCircleIcon>
       {props.benefit}
       <h1>awosme</h1>
        </p>
    );
};

export default Benefits;