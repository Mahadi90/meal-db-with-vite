import React from 'react';
import { HomeModernIcon } from '@heroicons/react/24/solid'

const About = () => {
    return (
        <div className='bg-gray-600 h-[110vh] md:h-[80vh]'>
            <h2 className='text-center font bold text-5xl text-white pt-8'>About US</h2>
            <p className='text-center px-2 md:px-12 lg:px-20 text-white pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ullam animi voluptatum enim distinctio id dicta. Omnis autem culpa tenetur voluptatibus voluptate nemo repellat officiis maxime tempore suscipit, repudiandae magnam, quod quibusdam neque ipsum voluptates excepturi rem, veniam iste minima magni? Quos eum autem, nemo sapiente assumenda iste deserunt corporis voluptatem suscipit praesentium? Possimus ab quasi esse distinctio nostrum ea neque placeat fuga dolor harum sapiente non aperiam vitae reprehenderit doloremque, vero quo? Itaque ratione dolorem fugiat aperiam sequi, dolores explicabo nihil sunt! Voluptate eum in harum ut exercitationem inventore, assumenda sequi quasi fugiat quas nostrum, minima modi recusandae totam?
            </p>
            <div className='flex mx-auto mt-6 text-center w-[300px]'>
            <HomeModernIcon className="h-40 w-40 text-red-500" />
            <HomeModernIcon className="h-40 w-40 text-red-500" />
            
            </div>
            <p className='text-white text-3xl font-bold text-center'>Our MealDb</p>
        </div>
    );
};

export default About;