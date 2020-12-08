import React, { Fragment, useState, useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragZuweisen, useAuftrag } from '../../../context/auftrag/auftragState';

const ZuweisenForm = ({ job }) => {
	const [auftragState, auftragDispatch] = useAuftrag();

	// local state
	const [monteur, setMonteur] = useState('');

	// clickhandler
	const onSubmit = (e) => {
		e.preventDefault();
		if (monteur === '') {
			M.toast({ html: 'Please fill in a monteur' });
		} else {
			M.toast({ html: 'Auftrag zugewiesen' });
		}

		//auftragZuweisen(monteur, auftragDispatch);
	};

	// clickhandler
	const onChange = (e) => {
		setMonteur(e.target.value);
	};

	return (
		<Fragment>
			<div className='container'>
				<h4 className='center-align'>Task: Auftrag {job.taskName}</h4>
				<div className='row'>
					<div className='input-field col s2 m3 l4'></div>
					<div className='input-field col s8 m6 l4'>
						<div className='card-panel white'>
							<span className='black-text'>
								<h6>
									<i className='fas fa-tools'></i> <b>Auftrag {job.name}</b>
								</h6>
							</span>
							<div className='divider yellow darken-4'></div>
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
							<br />
							<span className='black-text'>
								Auftrags-ID: <br /> <b>{job.id}</b>
							</span>
						</div>
					</div>
					<div className='input-field col s2 m3 l4'></div>
				</div>

				<form onSubmit={onSubmit}>
					<div className='row'>
						<div className='input-field col s2 m3 l2'></div>
						<div className='input-field col s8 m6 l8'>
							<input name='kundenId' onChange={onChange} type='text' className='validate' />
							<label htmlFor='kundenId'>Monteur zuweisen</label>
						</div>
						<div className='input-field col s2 m3 l2'></div>
					</div>

					<div className='row'>
						<div className='col offset-s2'>
							<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' type='submit'>
								{job.taskName}
							</button>
						</div>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default ZuweisenForm;
