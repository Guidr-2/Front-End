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

  	return (
  		<div className='trip'>
  			<h1>TITLE</h1>
  			<h2>{props.title}</h2>
  			<h3>Click card for more details</h3>

  			<button onClick={event => deleteTrip(event, props.id)}>Delete Trip</button>
  			{/*<button onClick={event => updateTrip(event, props.id)}>Update Trip</button>*/}
  			<Link to={`/UpdateTrip/${props.id}`}>
  				<button>Update Trip</button>
  			</Link>
  		</div>
  	);
}

export default Trip;
