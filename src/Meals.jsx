import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMeal from './SingleMeal';

const Meals = () => {

   const data =  useLoaderData();
//    console.log(data.meals)

    return (
        <div>
            <h2 className='text-center text-purple-500 font-bold text-4xl py-4 bg-purple-200'>Here your favourite melas : {data.meals.length}</h2>

            <div className='mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-6'>
                {
                    data.meals.map(singleMeal => <SingleMeal
                    key={singleMeal.idMeal}
                    singleMeal={singleMeal}
                    />)
                }
            </div>
        </div>
    );
};

export default Meals;