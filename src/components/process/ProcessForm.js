import React, { Fragment, useState, useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragEinplanen, getAuftraege, useAuftrag } from '../../context/auftrag/auftragState';

const ProcessForm = () => {
	const [auftragState, auftragDispatch] = useAuftrag();

	//load Auftraege into state before adding a new Auftrag
	//otherwise state is not initialized when adding a new Auftrag in state
	useEffect(() => {
		getAuftraege(auftragDispatch);
	}, [auftragDispatch]);

	// local state
	const [job, setJob] = useState({
		name: '',
		bauvorhaben: '',
		kundenId: ''
	});

	// clickhandler
	const onSubmit = (e) => {
		e.preventDefault();
		if (job.name === '' || job.bauvorhaben === '' || job.kundenId === '') {
			M.toast({ html: 'Please fill out all fields' });
		} else {
			auftragEinplanen(job, auftragDispatch);
			M.toast({ html: 'Auftrag eingeplant' });
		}
	};

	// clickhandler
	const onChange = (e) => {
		setJob({ ...job, [e.target.name]: e.target.value });
	};

	return (
		<Fragment>
			<div className='container'>
				<h4 className='center-align'>Start Process</h4>
				<form onSubmit={onSubmit}>
					<div className='row'>
						<div className='input-field col s2 m3 l2'></div>
						<div className='input-field col s8 m6 l8'>
							<input name='name' onChange={onChange} type='text' className='validate' />
							<label htmlFor='name'>Name</label>
						</div>
						<div className='input-field col s2 m3 l2'></div>
					</div>
					<div className='row'>
						<div className='input-field col s2 m3 l2'></div>
						<div className='input-field col s8 m6 l8'>
							<input name='bauvorhaben' onChange={onChange} type='text' className='validate' />
							<label htmlFor='bauvorhaben'>Bauvorhaben</label>
						</div>
						<div className='input-field col s2 m3 l2'></div>
					</div>
					<div className='row'>
						<div className='input-field col s2 m3 l2'></div>
						<div className='input-field col s8 m6 l8'>
							<input name='kundenId' onChange={onChange} type='text' className='validate' />
							<label htmlFor='kundenId'>Kunden-ID</label>
						</div>
						<div className='input-field col s2 m3 l2'></div>
					</div>

					<div className='row'>
						<div className='col offset-s2'>
							<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' type='submit'>
								Prozess starten
							</button>
						</div>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default ProcessForm;
