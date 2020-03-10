import React, { useContext, useState } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import SingleTripsCard from '../components/SingleTripsCard';

function Trip(props) {
console.log(props.match.params.id)
  const { trips } = useContext(TripsContext);
  
  const oneTrip = trips.filter(item => item.id == props.match.params.id);

  	return (
  		<div>
  			{oneTrip.map(trip => (
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
