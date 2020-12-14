import React, { Fragment, useState, useEffect } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragEinplanen, getAuftraege, useAuftrag } from '../../context/auftrag/auftragState';

const ProcessForm = () => {
	const [auftragState, auftragDispatch] = useAuftrag();

	// local state
	const [job, setJob] = useState({
		name: '',
		bauvorhaben: '',
		kundeId: ''
	});

	//load Auftraege into state before adding a new Auftrag
	//otherwise state is not initialized when trying to add a new Auftrag in state
	useEffect(() => {
		getAuftraege(auftragDispatch);
	}, [auftragDispatch, job]);

	// clickhandler
	const onSubmit = (e) => {
		e.preventDefault();
		if (job.name === '' || job.bauvorhaben === '' || job.kundeId === '') {
			M.toast({ html: 'Please fill out all fields' });
		} else {
			auftragEinplanen(job, auftragDispatch);
			M.toast({ html: 'Auftrag eingeplant' });
			clearState();
		}
	};

	//clear local state
	const clearState = () => {
		setJob({
			name: '',
			bauvorhaben: '',
			kundeId: ''
		});
	};

	// clickhandler
	const onChange = (e) => {
		setJob({ ...job, [e.target.name]: e.target.value });
	};

	return (
		<main>
			<div className='container'>
				<form onSubmit={onSubmit}>
					<div className='row'>
						<div className='col offset-s3'>
							<h5 className='left-align'>Auftragsübersicht</h5>
							<p>Starten Sie einen Auftragsprozess indem Sie einen Auftrag einplanen.</p>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s2 m3 l3'></div>
						<div className='input-field col s8 m6 l6'>
							<input name='name' onChange={onChange} value={job.name} type='text' className='validate' />
							<label htmlFor='name'>Name</label>
						</div>
						<div className='input-field col s2 m3 l3'></div>
					</div>
					<div className='row'>
						<div className='input-field col s2 m3 l3'></div>
						<div className='input-field col s8 m6 l6'>
							<input name='bauvorhaben' onChange={onChange} value={job.bauvorhaben} type='text' className='validate' />
							<label htmlFor='bauvorhaben'>Bauvorhaben</label>
						</div>
						<div className='input-field col s2 m3 l3'></div>
					</div>
					<div className='row'>
						<div className='input-field col s2 m3 l3'></div>
						<div className='input-field col s8 m6 l6'>
							<input name='kundeId' onChange={onChange} value={job.kundeId} type='text' className='validate' />
							<label htmlFor='kundeId'>Kunden-ID</label>
						</div>
						<div className='input-field col s2 m3 l3'></div>
					</div>

					<div className='row'>
						<div className='col offset-s3'>
							<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' type='submit'>
								Einplanen
							</button>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ProcessForm;
