import React, { useContext } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import Trip from '../components/Trip';

function Trips() {
	const { trips } = useContext(TripsContext);

	console.log(trips)

	return (
	  	<div>
	  			{trips.map(trip => (
	  				<Trip
	  					title={trip.title}
	  					key={trip.id}
	  					description={trip.description}
	  					distance={trip.distance}
	  					date={trip.date}
	  					type={trip.trip_type}
	  				/>
	  			))}
	  	</div>
	);
}

export default Trips;