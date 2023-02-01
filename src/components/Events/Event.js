import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  const { ID, Location, Date, Time } = event;

  return (
    <Link to={`/event/${ID}`}>
      <div className='bg-gray-300 px-3 py-2 rounded hover:text-white hover:bg-gray-500'>

        <div className='flex justify-between mb-2'>
          <p className='font-semibold'>{ID}: {Location}</p>
          <p>{Date} {Time}</p>
        </div>

        <p className='font-semibold'>Person Detected</p>
      </div>
    </Link>
  );
};

export default Event;