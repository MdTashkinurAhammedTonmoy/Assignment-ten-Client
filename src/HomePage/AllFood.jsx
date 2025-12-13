import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../outside/ModelCard';

const AllFood = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='mb-10 mt-10'>
            <div className='text-2xl text-center font-bold'>All Models</div>
            <p className='text-center mb-10'>Explore 3d Models</p>

            <div className='grid grid-cols-3 lg:grid-cols-4 gap-3'>
                {data.map(model => <ModelCard key={model.id} model={model}></ModelCard>)}
            </div>
        </div>
    );
};

export default AllFood;

