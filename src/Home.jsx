import React from 'react';

const Home = () => {
    return (
        <div className='bg-gray-700 h-[80vh]'>
           <h1 className='text-5xl font-bold text-white text-center pt-20 '>Awesome Item from MealDb you can get,If you want!</h1>

           <p className=' text-white py-12 text-center px-2 md:px-12 lg:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore quos nihil repellat. Doloribus natus cumque dicta libero deserunt nesciunt vero nostrum perferendis laudantium, iusto excepturi modi esse pariatur assumenda minima vitae tenetur odit perspiciatis deleniti. Eius, quam! Vitae itaque labore aspernatur corporis, neque mollitia provident quos fuga. Harum, odio!</p>
          <div className='mx-auto text-center mt-8'>
          <button className='text-white bg-red-500 px-8 py-4 rounded-lg font-bold hover:text-red-500 hover:bg-white transition-all'>More About Us</button>
           <button className='text-red-500 bg-white px-8 py-4 rounded-lg font-bold ml-4 hover:text-white hover:bg-red-500 transition-all'>Join to Login</button>
          </div>
        </div>
    );
};

export default Home;