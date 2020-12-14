import React, { useContext, useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import axios from 'axios';

import { GET_TASKS, TASK_ERROR } from '../types';

//create custom hook
export const useTask = () => {
	const { state, dispatch } = useContext(TaskContext);
	return [state, dispatch];
};

//get tasks
export const getTasks = async (dispatch) => {
	try {
		const resTasks = await axios.get('http://localhost:8088/engine-rest/task');

		//ToDo: add infos about the auftrag for the task to display it on the taskboard

		dispatch({
			type: GET_TASKS,
			payload: resTasks.data
		});
	} catch (error) {
		console.log('Error:', error);
	}
};

const TaskState = (props) => {
	const initState = {
		tasks: null,
		loading: true,
		error: null
	};

	const [state, dispatch] = useReducer(taskReducer, initState);

	return <TaskContext.Provider value={{ state, dispatch }}>{props.children}</TaskContext.Provider>;
};

export default TaskState;
