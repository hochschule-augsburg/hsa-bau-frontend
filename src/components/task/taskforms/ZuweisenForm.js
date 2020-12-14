import React, { Fragment, useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragZuweisen, clearSelected, useAuftrag } from '../../../context/auftrag/auftragState';
import { useTask } from '../../../context/task/taskState';
import AuftragDetails from '../AuftragDetails';

const ZuweisenForm = ({ job }) => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const [taskState, taskDispatch] = useTask();

	// local state
	const [monteur, setMonteur] = useState('');

	// clickhandler
	const onSubmit = (e) => {
		e.preventDefault();
		if (monteur === '') {
			M.toast({ html: 'Please fill in a monteur' });
		} else {
			const reqData = {
				monteur,
				auftragId: job.id,
				taskId: job.taskId
			};
			auftragZuweisen(reqData, auftragDispatch);
			clearState();
			M.toast({ html: 'Auftrag zugewiesen' });
		}
	};

	//clear local state
	const clearState = () => {
		setMonteur('');
	};

	// clickhandler
	const onChange = (e) => {
		setMonteur(e.target.value);
	};

	return (
		<Fragment>
			<AuftragDetails job={job} />
			<form onSubmit={onSubmit}>
				<div className='row'>
					<div className='input-field col s1 m3 l4'></div>
					<div className='input-field col s10 m6 l4'>
						<input name='kundenId' onChange={onChange} value={monteur} type='text' className='validate' />
						<label htmlFor='kundenId'>Monteur zuweisen</label>
					</div>
					<div className='input-field col s1 m3 l4'></div>
				</div>
				<div className='row'>
					<div className='col offset-s4'>
						<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' type='submit'>
							Zuweisen
						</button>
					</div>
				</div>
			</form>
		</Fragment>
	);
};

export default ZuweisenForm;
