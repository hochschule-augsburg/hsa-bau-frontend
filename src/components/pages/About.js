import React from 'react';

const About = ({ history }) => {
	return (
		<div>
			<div className='container'>
				<h4>About this App</h4>
				<p className='my-1'>Prototype React App for managing SSB Fidan Auftragsprozess...</p>
				<p className='my-1'>React: 17.0.1</p>
				<p className='grey darken-1 white-text p'>
					<strong> Version: </strong>1.1.0
				</p>
				<button className='btn z-depth-0 grey darken-1 waves-light mg-top-50' onClick={() => history.goBack()}>
					Back
				</button>
			</div>
		</div>
	);
};

export default About;
