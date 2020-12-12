import React, { Fragment } from 'react';

import { useAuftrag, getAuftrag } from '../../context/auftrag/auftragState';

const TaskItem = ({ task }) => {
	const [auftragState, auftragDispatch] = useAuftrag();

	const loadForm = (e) => {
		//e.preventDefault();
		getAuftrag(task.name, task.processInstanceId, task.id, auftragDispatch);
	};

	return (
		<Fragment>
			<div className='col s12 m3'>
				<a href='#' onClick={loadForm}>
					<div className='card-panel white'>
						<span className='black-text'>
							<i className='fas fa-tasks'></i> <b>{task.name}</b>
						</span>
						<div className='divider yellow darken-4'></div>
						<br />
						<span className='black-text'>
							<b>Created at: </b>
							{task.created}
						</span>
						<br />
						<span className='black-text'>
							<b>ProzessID: </b> {task.processInstanceId}
						</span>
					</div>
				</a>
			</div>
		</Fragment>
	);
};

export default TaskItem;
