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
		//get tasks
		let resTasks = await axios.get('http://localhost:8088/engine-rest/task');
		resTasks = resTasks.data;
		//console.log('resTasks:', resTasks);

		/******/
		/** add infos about the auftrag to the task to display auftragname und bauvorhaben on the taskboard */
		/******/

		//get instances
		let resInstances = await axios.get('http://localhost:8088/engine-rest/process-instance');
		resInstances = resInstances.data;
		//console.log('resInstances:', resInstances);

		//get only processInstanceId and businessKey
		let processInstances = resInstances.map((instance) => {
			return { processInstanceId: instance.id, businessKey: instance.businessKey };
		});
		//console.log('processInstances:', processInstances);

		//get aufträge
		let resAuftraege = await axios.get('http://localhost:8088//restapi/auftrag');
		resAuftraege = resAuftraege.data;
		//console.log('resAuftraege:', resAuftraege);

		//rename property name to auftragName
		resAuftraege = resAuftraege.map((auftrag) => {
			return { ...auftrag, auftragName: auftrag.name };
		});

		//merge instances and auftraege
		let instancesAndAuftraege = processInstances.map((instance) => {
			for (let i = 0; i < resAuftraege.length; i++) {
				if (instance.businessKey === resAuftraege[i].id) {
					return Object.assign(instance, resAuftraege[i]);
				}
			}
		});
		//console.log('instancesAndAuftraege', instancesAndAuftraege);

		//merge instancesAndAuftraege and tasks
		let tasksAndAuftraege = instancesAndAuftraege.map((auftrag) => {
			for (let i = 0; i < resTasks.length; i++) {
				if (auftrag.processInstanceId === resTasks[i].processInstanceId) {
					return Object.assign(auftrag, resTasks[i]);
				}
			}
		});
		console.log('tasksAndAuftraege', tasksAndAuftraege);

		dispatch({
			type: GET_TASKS,
			payload: tasksAndAuftraege
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
