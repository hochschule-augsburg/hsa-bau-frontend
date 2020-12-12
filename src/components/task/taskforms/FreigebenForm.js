import React, { Fragment } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragFreigeben, clearAuftrag, useAuftrag } from '../../../context/auftrag/auftragState';
import AuftragDetails from '../AuftragDetails';

const FreigebenForm = ({ job }) => {
	const [auftragState, auftragDispatch] = useAuftrag();

	const onSubmit = (e) => {
		e.preventDefault();
		const data = {
			auftragId: job.id,
			taskId: job.taskId
		};
		auftragFreigeben(data, auftragDispatch);
		clearAuftrag(auftragDispatch);
		//getTasks(taskDispatch);
		M.toast({ html: 'Auftrag freigegeben' });
	};

	return (
		<Fragment>
			<AuftragDetails job={job} />
			<div className='row'>
				<div className='col offset-s3'>
					<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' onClick={onSubmit}>
						Freigeben
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default FreigebenForm;
