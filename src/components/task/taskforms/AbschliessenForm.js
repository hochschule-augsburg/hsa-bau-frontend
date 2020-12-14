import React, { Fragment } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragAbschliessen, clearSelected, useAuftrag } from '../../../context/auftrag/auftragState';
import AuftragDetails from '../AuftragDetails';

const AbschliessenForm = ({ job }) => {
	const [auftragState, auftragDispatch] = useAuftrag();

	//clickhandler
	const onSubmit = (e) => {
		e.preventDefault();
		const reqData = {
			auftragId: job.id,
			taskId: job.taskId
		};
		auftragAbschliessen(reqData, auftragDispatch);
		M.toast({ html: 'Auftrag abgeschlossen' });
	};

	return (
		<Fragment>
			<AuftragDetails job={job} />
			<div className='row'>
				<div className='col offset-s4'>
					<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' onClick={onSubmit}>
						Abschliessen
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default AbschliessenForm;
