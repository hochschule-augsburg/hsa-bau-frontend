import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css/dist/js/materialize.min.js';

import { auftragFreigeben, clearSelected, useAuftrag } from '../../../context/auftrag/auftragState';
import AuftragDetails from '../AuftragDetails';

const FreigebenForm = ({ job }) => {
	const [auftragState, auftragDispatch] = useAuftrag();

	//clickhandler
	const onSubmit = (e) => {
		e.preventDefault();
		const reqData = {
			auftragId: job.id,
			taskId: job.taskId
		};
		auftragFreigeben(reqData, auftragDispatch);
		M.toast({ html: 'Auftrag freigegeben' });
	};

	return (
		<Fragment>
			<AuftragDetails job={job} />
			<div className='row'>
				<div className='col offset-s4'>
					<Link to='/tasklist'>
						<button className='btn-small z-depth-0 waves-effect yellow darken-4 waves-light' onClick={onSubmit}>
							Freigeben
						</button>
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default FreigebenForm;
