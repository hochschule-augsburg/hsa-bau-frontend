import React, { Fragment } from 'react';

const AuftragDetails = ({ job }) => {
	return (
		<Fragment>
			<h5 className='center-align'>{job.taskName}</h5>
			<div className='row'>
				<div className='input-field col s1 m3 l3'></div>
				<div className='input-field col s10 m6 l6'>
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
				<div className='input-field col s1 m3 l3'></div>
			</div>
		</Fragment>
	);
};

export default AuftragDetails;
