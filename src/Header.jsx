import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
           <div className="navbar bg-slate-800 text-white px-2 md:px-8">
  <div className="flex-1">
    <Link className="text-2xl font-bold text-red-500">MealDb</Link>
  </div>
    <ul className="flex">
      <li className='mr-8 uppercase hover:text-slate-200'><ActiveLink  to='/'>Home</ActiveLink></li>
     <li className='mr-8 uppercase hover:text-slate-200'><ActiveLink  to='/about'>About</ActiveLink></li>
      <li className='mr-8 uppercase hover:text-slate-200'><ActiveLink  to='/meals'>Meals</ActiveLink></li>
     <li className='mr-8 uppercase hover:text-slate-200'><ActiveLink  to='/contact'>Contact</ActiveLink></li>
    </ul>
</div>
        </div>
    );
};

export default Header;