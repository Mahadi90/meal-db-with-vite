import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <div className="navbar bg-slate-800 text-white px-2 md:px-8">
  <div className="flex-1">
    <Link className="text-2xl font-bold text-red-500">MealDb</Link>
  </div>
    <ul className="flex">
      <Link className='mr-8 uppercase hover:text-slate-200' to='/'>Home</Link>
      <Link className='mr-8 uppercase hover:text-slate-200' to='/about'>About</Link>
      <Link className='mr-8 uppercase hover:text-slate-200' to='/meals'>Meals</Link>
      <Link className='mr-8 uppercase hover:text-slate-200' to='/contact'>Contact</Link>
    </ul>
</div>
        </div>
    );
};

export default Header;