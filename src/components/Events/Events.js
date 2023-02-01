import React, { useEffect, useState } from 'react';
import Event from './Event';

const Events = () => {
   const [events, setEvents] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/events")
         .then(res => res.json())
         .then(data => setEvents(data))
   }, [])

   return (
      <div className='border-[7px]'>
         <div className='grid grid-cols-1 gap-3 p-3'>
            <h2 className='font-bold text-2xl mb-3'>Events</h2>

            {
               events.map(event =>
                  <Event
                     key={event.ID}
                     event={event}
                  >
                  </Event>
               )
            }
         </div>
      </div>
   );
};

export default Events;