import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EventDetail = () => {
  const event = useLoaderData();

  return (
    <>
      {
        event &&
        <div className='font-semibold sticky top-0'>
          <div className='text-center mt-3 flex justify-around'>
            <div className='text-start'>
              <div className='mb-10'>
                <h2 className='text-2xl font-bold mt-10'>{event.ID}</h2>
                <h2 className='text-2xl font-bold'>Person Detected</h2>
              </div>

              <div>
                <p>Name: {event.Name}</p>
                <p>Location: {event.Location}</p>
                <p>Date: {event.Date}</p>
                <p>Time:{event.Time}</p>
              </div>


              <div className='mt-10'>
                <p>Description: <br /> {event.Name} detected at <br /> {event.Location} on {event.Date}</p>
              </div>
            </div>

            <div className=''>
              <h2 className='text-2xl font-bold mb-5 text-start'>{event.Gender}</h2>
              <img className='w-96 h-85'
                src={event.Image} alt="" />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default EventDetail;