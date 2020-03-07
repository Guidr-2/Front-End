import React from 'react';

function Trip(props) {
	console.log(props);
  	return (
  		<div className='Trip'>
  			<h1>Here isn't a trip</h1>
  			<p>{props.title}</p>
  		</div>
  	);
}

export default Trip;
