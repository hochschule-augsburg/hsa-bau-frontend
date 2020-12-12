import React, { Fragment, useState } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragZuweisen, clearAuftrag, useAuftrag } from '../../../context/auftrag/auftragState';
import { getTasks, useTask } from '../../../context/task/taskState';
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
			const data = {
				monteur,
				auftragId: job.id,
				taskId: job.taskId
			};
			auftragZuweisen(data, auftragDispatch);
			clearAuftrag(auftragDispatch);
			//getTasks(taskDispatch);
			M.toast({ html: 'Auftrag zugewiesen' });
		}
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
					<div className='input-field col s1 m3 l3'></div>
					<div className='input-field col s10 m6 l6'>
						<input name='kundenId' onChange={onChange} type='text' className='validate' />
						<label htmlFor='kundenId'>Monteur zuweisen</label>
					</div>
					<div className='input-field col s1 m3 l3'></div>
				</div>

				<div className='row'>
					<div className='col offset-s3'>
						<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' type='submit'>
							Zuweisen
						</button>
					</div>
					<div className='col offset-s3'>
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
