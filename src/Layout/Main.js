import React from 'react';
import { Outlet } from 'react-router-dom';
import Events from '../components/Events/Events';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
  return (
    <section>
      <Navbar></Navbar>

      <div className='grid grid-cols-3 gap-10'>
        <div className='col-span-2'>
          <Outlet></Outlet>
        </div>

        <div className='col-span-1'>
          <Events></Events>
        </div>
      </div>

    </section>
  );
};

export default Main;