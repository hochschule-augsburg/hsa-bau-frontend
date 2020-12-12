import React, { Fragment } from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragGenehmigen, clearAuftrag, useAuftrag } from '../../../context/auftrag/auftragState';
import AuftragDetails from '../AuftragDetails';

const GenehmigenForm = ({ job }) => {
	const [auftragState, auftragDispatch] = useAuftrag();

	const onSubmit = (e) => {
		e.preventDefault();
		const data = {
			auftragId: job.id,
			taskId: job.taskId
		};
		auftragGenehmigen(data, auftragDispatch);
		clearAuftrag(auftragDispatch);
		//getTasks(taskDispatch);
		M.toast({ html: 'Auftrag genehmigt' });
	};

	return (
		<Fragment>
			<AuftragDetails job={job} />
			<div className='row'>
				<div className='col offset-s3'>
					<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' onClick={onSubmit}>
						Genehmigen
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default GenehmigenForm;
