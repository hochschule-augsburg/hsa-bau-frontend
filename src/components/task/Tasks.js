import React, { useEffect, Fragment } from 'react';

import TaskItem from './TaskItem';

import { useTask, getTasks } from '../../context/task/taskState';
import Spinner from '../layout/Spinner';

const Tasks = () => {
	const [taskState, taskDispatch] = useTask();
	const { tasks, loading } = taskState;

	useEffect(() => {
		getTasks(taskDispatch);
		//console.log(auftraege);
		//console.log(typeof auftraege);
	}, [taskDispatch]);

	if (loading) {
		return <Spinner />;
	}

	//console.log('Tasks:', tasks);

	if (tasks !== null && tasks.length === 0 && !loading) {
		return (
			<div className='mg-top-100 center-align'>
				<span>Momentan sind keine Tasks vorhanden...</span>
			</div>
		);
	} else {
		//console.log(tasks);
		return <div>{tasks !== null && tasks.map((task) => <TaskItem task={task} key={task.id} />)}</div>;
	}
};

export default Tasks;
