import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-900">
        <div className="navbar-start">
          <Link className="btn btn-ghost normal-case text-xl text-green-600 font-bold">
            <span className='text-green-600 text-[26px] mt-[-4px] mb-0'>S
            </span>
            EQUR
            <span className='text-red-500 text-[26px] mt-[-4px] mb-0'>AI
            </span>
            SE</Link>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle text-white mr-36">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>

          <div className="px-5 py-1 text-xl bg-green-400 mr-3 rounded font-[500]">25</div>
          <div className="px-5 py-1 text-xl bg-red-400 text-white rounded font-[400]">25</div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;