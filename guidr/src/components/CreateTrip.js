import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function CreateTrip() {
	const [newTrip, addAtrip] = useState([]);

	const handleChange = e => {
		addAtrip({
			...newTrip,
				[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

		axiosWithAuth()
		.post('axiosWithAuth/trips')
		.then(response => {
			
		})
	}

  	return (
  		<div className='CreateTrip'>
  			<h1>Create a new trip here!</h1>

  			<form>
  				<input 
  					type='text'
  					name='trip_title'
  					placeholder='New Trip Name'
  					value={newTrip.trip_title}
  					onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='description'
  					placeholder='Trip Description'
  					value={newTrip.description}
  					onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='duration'
  					placeholder='Trip Duration'
  					value={newTrip.duration}
  					onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='distance'
  					placeholder='Distance Traveled'
  					value={newTrip.distance}
  				/>

  				<input 
  					type='text'
  					name='trip_type'
  					placeholder='Type of Trip'
  					value={newTrip.trip_type}
  					onChange={handleChange}
  				/>

  				<button>Add Trip</button>
  			</form>
  		
    	</div>
    );
}

export default CreateTrip;

// POST: endpoint /trips

// Key					Type			Required
// trip_title
// id				integer			Yes (server controlled)
// user_id			integer			Yes
// trip_title		text			Yes
// description		text			Yes
// is_private		integer(0/1)	Yes
// is_professional	integer(0/1)	Yes
// duration			text			Yes
// distance			text			Yes
// date				text			Yes
// trip_type		text			Yes