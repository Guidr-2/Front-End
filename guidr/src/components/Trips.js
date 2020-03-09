import React, { useContext } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import Trip from '../components/Trip';
import { Link } from 'react-router-dom';

function Trips() {
	const { trips } = useContext(TripsContext);

	return (
	  	<div>
	  		
  			{trips.map(trip => (
  				<Link to={`/Trip/${trip.id}`}>
	  				<Trip
	  					title={trip.title}
	  					key={trip.id}
	  					id={trip.id}
	  					description={trip.description}
	  					distance={trip.distance}
	  					date={trip.date}
	  					type={trip.trip_type}
	  				/>
  				</Link>
  			))}
	  		
	  	</div>
	);
}

export default Trips;