import React, { useContext, useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import axios from 'axios';

import { GET_TASKS, TASK_ERROR, CLEAR_TASKS, CLEAR_ERRORS } from '../types';

// create custom hook
export const useTask = () => {
	const { state, dispatch } = useContext(TaskContext);
	return [state, dispatch];
};

// Get tasks
export const getTasks = async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:8088/engine-rest/task');
		//console.log(res.data);

		dispatch({
			type: GET_TASKS,
			payload: res.data
		});
	} catch (error) {
		console.log('Error:', error);
		dispatch({
			type: TASK_ERROR,
			payload: error
		});
	}
};

const TaskState = (props) => {
	const initState = {
		tasks: null,
		loading: true,
		selected: null,
		current: null,
		error: null,
		success: true
	};

	const [state, dispatch] = useReducer(taskReducer, initState);

	return <TaskContext.Provider value={{ state, dispatch }}>{props.children}</TaskContext.Provider>;
};

export default TaskState;
