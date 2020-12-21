import React, { Fragment } from 'react';
import Moment from 'react-moment';

import { useAuftrag, getSelectedAuftrag } from '../../context/auftrag/auftragState';

const TaskItem = ({ task }) => {
	const [auftragState, auftragDispatch] = useAuftrag();

	//get the nedded infos from the auftrag for displaying the taskforms
	const loadForm = (e) => {
		//e.preventDefault();
		getSelectedAuftrag(task.name, task.processInstanceId, task.id, auftragDispatch);
	};

	return (
		<Fragment>
			<div className='col s12 m6 l3'>
				<a href='#' onClick={loadForm}>
					<div className='card-panel white'>
						<span className='black-text'>
							<i className='fas fa-tasks'></i> <b>{task.name}</b>
						</span>
						<div className='divider yellow darken-4'></div>
						<br />
						<span className='black-text'>
							Auftragname:
							<br />
							<b>{task.auftragName}</b>
						</span>
						<br />
						<span className='black-text'>
							Bauvorhaben:
							<br />
							<b>{task.bauvorhaben}</b>
						</span>
						<br />
						<span className='black-text'>
							Erstellt am:
							<br />
							<b>
								<Moment format='Do MMMM YYYY'>{task.created}</Moment>
								<br />
								<Moment format='k:mm:ss'>{task.created}</Moment>
							</b>
						</span>
					</div>
				</a>
			</div>
		</Fragment>
	);
};

export default TaskItem;
