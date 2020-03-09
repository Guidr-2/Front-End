import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const jwtDecode = require('jwt-decode');

function UpdateTrip() {
	const [newTrip, addAtrip] = useState([]);
  // console.log(newTrip)

	const handleChange = e => {
		addAtrip({
			...newTrip,
				[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

    const decoded = jwtDecode(localStorage.getItem('token'));
    newTrip.user_id = decoded.userid;
    // newTrip.is_professional = 1;
    // newTrip.is_private = 0;
    // newTrip.distance = '20 miles';
    // newTrip.date = "2020-06-01 08:00:00:000";
		axiosWithAuth()
		.post('trips', newTrip)
		.then(response => {
      console.log(newTrip);
			addAtrip({newTrip: response.data })
      console.log(response)
      document.getElementById('reset').reset();
		})
    .catch(err => console.log(err.response, newTrip));
    // document.getElementById('reset').reset();
    };

  	return (
  		<div className='CreateTrip'>
  			<h1>Update Trip</h1>

  			<form onSubmit={handleSubmit} id='reset'>
  				<input 
  					type='text'
  					name='title'
  					placeholder='New Trip Name'
  					value={newTrip.title}
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
            onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='trip_type'
  					placeholder='Type of Trip'
  					value={newTrip.trip_type}
  					onChange={handleChange}
  				/>

          <p>Private Guide</p>
          <input className='checkbox'
            type='checkbox'
            name='is_private'
            value={newTrip.is_private = 0}
            onChange={handleChange}
          />

          <p>Professional Guide</p>
          <input className='checkbox'
            type='checkbox'
            name='is_professional'
            value={newTrip.is_professional = 0}
            onChange={handleChange}
          />

          <input 
            type='time'
            name='date'
            value={newTrip.date}
            onChange={handleChange}
          />
  				<button>Add Trip</button>
  			</form>
  		
    	</div>
    );
}

export default UpdateTrip;
