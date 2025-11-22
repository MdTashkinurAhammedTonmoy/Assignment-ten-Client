import React, { Suspense } from 'react';
import SixRecipes from './SixRecipes';

const RecipesFastpage = ({data}) => {
    return (
        <div className='mx-auto w-250 items-center mb-10 mt-10'>
            <div className='flex mx-auto w-11/12 justify-between mt-10 mb-5'>
                <h2 className='text-3xl font-bold'>Latest Recipes</h2>
                <button className='bg-yellow-400 hover:bg-yellow-800 text-black font-semibold px-6 py-2 rounded-md'>All Recipes</button>
            </div>
            <div className='border border-gray-300 mb-5'></div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    data.map((sixData) => <SixRecipes key={sixData.id} sixData={sixData}></SixRecipes>)
                }
              </div>
            </Suspense>
        </div>
    );
};

export default RecipesFastpage;