import React, { useEffect, Fragment } from 'react';

import TaskItem from './TaskItem';

import { useTask, getTasks } from '../../context/task/taskState';
import Spinner from '../layout/Spinner';

const Tasks = ({ load }) => {
	const [taskState, taskDispatch] = useTask();
	const { tasks, loading } = taskState;

	useEffect(() => {
		getTasks(taskDispatch);
	}, [taskDispatch, load]);

	if (loading) {
		return <Spinner />;
	}

	if (tasks !== null && tasks.length === 0 && !loading) {
		return (
			<div className='row'>
				<div className='col l12'>
					<p>Momentan sind keine offen Tasks vorhanden.</p>
				</div>
			</div>
		);
	} else {
		return (
			<Fragment>
				<div>{tasks !== null && tasks.map((task) => <TaskItem task={task} key={task.id} />)}</div>
			</Fragment>
		);
	}
};

export default Tasks;
