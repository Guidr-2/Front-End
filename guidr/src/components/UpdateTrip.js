import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const jwtDecode = require('jwt-decode');

function UpdateTrip(props) {
	console.log(props)
	const [tripUpdate, setUpdatedTrip] = useState([]);
  // console.log(tripUpdate)

  	useEffect(() => {
		axiosWithAuth()
		.get(`trips/${props.match.params.id}`)
		.then((result) => {
			console.log(result)
			setUpdatedTrip(result.data)
		})
		.catch((error) => {
			console.log(error)
		})
		// we're subscribing to the param, just in case it ever changes
		// so it'll re-fetch with the new ID
	}, [props.match.params.id])

	const handleChange = e => {
		setUpdatedTrip({
			...tripUpdate,
				[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()

	    const decoded = jwtDecode(localStorage.getItem('token'));
	    tripUpdate.user_id = decoded.userid;
	    // tripUpdate.is_professional = 1;
	    // tripUpdate.is_private = 0;
	    // tripUpdate.distance = '20 miles';
	    // tripUpdate.date = "2020-06-01 08:00:00:000";
		axiosWithAuth()
		.put(`trips/${tripUpdate.id}`, tripUpdate)
		.then(response => {
	      	console.log(tripUpdate);
			setUpdatedTrip({tripUpdate: response.data })
	      	console.log(response)
	      	document.getElementById('reset').reset();
		})
	    .catch(err => console.log(err.response, tripUpdate));
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
  					value={tripUpdate.title}
  					onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='description'
  					placeholder='Trip Description'
  					value={tripUpdate.description}
  					onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='duration'
  					placeholder='Trip Duration'
  					value={tripUpdate.duration}
  					onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='distance'
  					placeholder='Distance Traveled'
  					value={tripUpdate.distance}
            onChange={handleChange}
  				/>

  				<input 
  					type='text'
  					name='trip_type'
  					placeholder='Type of Trip'
  					value={tripUpdate.trip_type}
  					onChange={handleChange}
  				/>

          <p>Private Guide</p>
          <input className='checkbox'
            type='checkbox'
            name='is_private'
            value={tripUpdate.is_private = 0}
            onChange={handleChange}
          />

          <p>Professional Guide</p>
          <input className='checkbox'
            type='checkbox'
            name='is_professional'
            value={tripUpdate.is_professional = 0}
            onChange={handleChange}
          />

          <input 
            type='time'
            name='date'
            value={tripUpdate.date}
            onChange={handleChange}
          />
  				<button>Add Trip</button>
  			</form>
  		
    	</div>
    );
}

export default UpdateTrip;
