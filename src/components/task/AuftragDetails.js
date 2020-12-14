import React, { Fragment } from 'react';

const AuftragDetails = ({ job }) => {
	return (
		<Fragment>
			<div className='row'>
				<div className='col offset-s4'>
					<h5 className='left-align'># Task: {job.taskName}</h5>
				</div>
			</div>
			<div className='row'>
				<div className='input-field col s0 m3 l4'></div>
				<div className='input-field col s12 m6 l4'>
					<div className='card-panel white'>
						<span className='black-text'>
							<h6>
								<i className='fas fa-tools'></i> <b>Auftragsdetails</b>
							</h6>
						</span>
						<div className='divider yellow darken-4'></div>
						<br />
						<span className='black-text'>
							Name: <b>{job.name}</b>
						</span>
						<br />
						<span className='black-text'>
							Kunde: <b>{job.kunde}</b>
						</span>
						<br />
						<span className='black-text'>
							Bauvorhaben: <b>{job.bauvorhaben}</b>
						</span>
						<br />
						<span className='black-text'>
							Status: <b>{!job.status ? 'Angelegt' : job.status}</b>
						</span>
						<br />
					</div>
				</div>
				<div className='input-field col s0 m3 l4'></div>
			</div>
		</Fragment>
	);
};

export default AuftragDetails;
