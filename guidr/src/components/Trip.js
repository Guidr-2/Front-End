import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

function Trip(props) {
	console.log(props);

	const history = useHistory();

	const deleteTrip = (event, id) => {
		event.preventDefault()

		axiosWithAuth()
		.delete(`/trips/${id}`)
		.then(response => {
			console.log('Deleted')
			history.push('/Trips')
		})
		.catch(error => {
			console.log(error)
		})
	}

  	return (
  		<div className='trip'>
  			<h1>Trip Details</h1>
  			<p><strong>TITLE: </strong>{props.title}</p>
  			<p><strong>DESCRIPTION: </strong>{props.description}</p>
  			<p><strong>DISTANCE: </strong>{props.distance}</p>
  			<p><strong>DATE: </strong>{props.date}</p>
  			<p><strong>TYPE: </strong>{props.type}</p>

  			<button onClick={event => deleteTrip(event, props.id)}>Delete Trip</button>
  		</div>
  	);
}

export default Trip;
