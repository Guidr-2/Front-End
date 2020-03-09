import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, Link } from 'react-router-dom';

function Trip(props) {
	console.log(props.id);
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

	// const updateTrip = (event, id) => {
	// 	event.preventDefault()
	// 	console.log('Update Trip')

	// 	history.push('/UpdateTrip');
	// }

  	return (
  		<div className='trip'>
  			<h1>Trip Details</h1>
  			<p><strong>TITLE: </strong>{props.title}</p>
  			<p><strong>DESCRIPTION: </strong>{props.description}</p>
  			<p><strong>DISTANCE: </strong>{props.distance}</p>
  			<p><strong>DATE: </strong>{props.date}</p>
  			<p><strong>TYPE: </strong>{props.type}</p>

  			<button onClick={event => deleteTrip(event, props.id)}>Delete Trip</button>
  			{/*<button onClick={event => updateTrip(event, props.id)}>Update Trip</button>*/}
  			<Link to={`/UpdateTrip/${props.id}`}>
  				<button>Update Trip</button>
  			</Link>
  		</div>
  	);
}

export default Trip;
