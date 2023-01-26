import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import RightSide from '../components/RightSide/RightSide';

const Main = () => {
  return (
    <section>
      <Navbar></Navbar>

      <div className='grid grid-cols-3 gap-10'>
        <div className='col-span-2'>
          <Outlet></Outlet>
        </div>

        <div className='col-span-1'>
          <RightSide></RightSide>
        </div>
      </div>

    </section>
  );
};

export default Main;