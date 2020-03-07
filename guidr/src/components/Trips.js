import React, { useContext } from 'react';
import { TripsContext } from '../contexts/TripsContext';

function Trips() {
	const { trips } = useContext(TripsContext);

	console.log(trips)

	return (
	  	<div>
	  		<h1>Trips will display here</h1>

	  	
	  	</div>
	);
}

export default Trips;