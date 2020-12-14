import React, { Fragment, useEffect, useState } from 'react';

import { useAuftrag, clearSelected } from '../../context/auftrag/auftragState';

import Tasks from '../task/Tasks';
import Formhandler from '../task/FormHandler';

const TaskList = ({ load }) => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const { selected } = auftragState;

	useEffect(() => {
		clearSelected(auftragDispatch);
	}, [load]);

	const taskBoardHead = (
		<div className='row'>
			<div className='col l12'>
				<h5 className='left-align'>Task-Board</h5>
				<p>
					Verschaffen Sie sich auf dem Task-Board einen Überblick der offenen Tasks für die laufenden Aufträge.
					<br />
					Durch das Anklicken eines Tasks können sie ihn bearbeiten.
				</p>
			</div>
		</div>
	);

	return (
		<Fragment>
			<div className='container'>
				{selected == null && taskBoardHead}

				{selected != null ? (
					<Formhandler />
				) : (
					<div className='row'>
						<Tasks load={load} />
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default TaskList;
