import React from 'react';

const About = ({ history }) => {
	return (
		<div>
			<div className='container'>
				<h4>About this App</h4>
				<p className='my-1'>React App for managing SSB Fidan Process...</p>
				<p className='my-1'>Stack etc...</p>
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
