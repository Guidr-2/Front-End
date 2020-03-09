import React, { useContext } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import SingleTripsCard from '../components/SingleTripsCard';

function Trip() {

  const { trips } = useContext(TripsContext);
  console.log(trips);

  	return (
  		<div className='trip'>
  			{trips.map(trip => (
          
            <SingleTripsCard
              title={trip.title}
              key={trip.id}
              id={trip.id}
              description={trip.description}
              distance={trip.distance}
              date={trip.date}
              type={trip.trip_type}
            />
          
        ))}
  		</div>
  	);
}

export default Trip;
