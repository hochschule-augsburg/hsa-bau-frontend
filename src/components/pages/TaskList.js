import React, { Fragment, useEffect, useState } from 'react';

import { useAuftrag, clearAuftrag } from '../../context/auftrag/auftragState';

import Tasks from '../task/Tasks';
import Formhandler from '../task/FormHandler';

const TaskList = () => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const { selected, loading } = auftragState;

	// function useForceUpdate() {
	// 	const [value, setValue] = useState(0); // integer state
	// 	return () => setValue((value) => ++value); // update the state to force render
	// }

	// useForceUpdate();

	useEffect(() => {
		clearAuftrag(auftragDispatch);
	}, []);

	console.log('selected:', selected);

	return (
		<Fragment>
			<div className='container'>
				<h4 className='center-align'>{selected ? '#Task' : 'Task-Liste'}</h4>
				{selected != null ? (
					<Formhandler />
				) : (
					<div className='row'>
						<Tasks />
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default TaskList;

// wenn selected true ist, dann muss hier der FormHandler angezeigt werden!
