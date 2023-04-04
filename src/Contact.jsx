import React from 'react';

const Contact = () => {
    return (
        <div  className='bg-gray-700 h-[86vh] md:h-[80vh]'>

            <h2 className='text-4xl text-white pt-6 text-center'>Contact US</h2>

           <div className='flex flex-col w-96 mx-auto pt-8'>
            <input className='mb-4 p-2 rounded border-0' type="text" placeholder='Name' />
            <input className='mb-4 p-2 rounded border-0' type="email" placeholder='Email' />
            <input className='mb-4 p-2 rounded border-0' type="password" placeholder='Password' />
             <textarea className='mb-4 rounded p-2' name="" id="" cols="30" rows="5" placeholder='message'></textarea>
             <button className='bg-red-500 font-bold text-white p-2 rounded-lg'>Submit</button>
           </div>

        </div>
    );
};

export default Contact;