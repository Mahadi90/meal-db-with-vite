import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const App = () => {

const navigation = useNavigation()

  return (
    <div>
      
      <Header/>
      <div className='bg-gray-700 text-center font-bold text-red-600 pt-4 text-3xl'>{navigation.state === 'loading' ? 'Loading.....' : ''}</div>
      <Outlet/>
      <Footer/>
    
    </div>
  );
};

export default App;