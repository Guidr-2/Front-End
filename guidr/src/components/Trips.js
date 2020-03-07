import React, { useContext } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import Trip from '../components/Trip';

function Trips() {
	const { trips } = useContext(TripsContext);

	console.log(trips)

	return (
	  	<div>
	  		<h1>Trips will display here</h1>
	  			{trips.map(trip => (
	  				<Trip
	  					title={trip.title}
	  				/>
	  			))}
	  	</div>
	);
}

export default Trips;