import React, { useContext, useReducer } from 'react';
import AuftragContext from './auftragContext';
import auftragReducer from './auftragReducer';
import axios from 'axios';

import { GET_AUFTRAEGE, GET_AUFTRAG, ADD_AUFTRAG, DELETE_AUFTRAG, UPDATE_AUFTRAG, AUFTRAG_FINISHED, AUFTRAG_ERROR, CLEAR_AUFTRAEGE, CLEAR_ERRORS } from '../types';

// create custom hook
export const useAuftrag = () => {
	const { state, dispatch } = useContext(AuftragContext);
	return [state, dispatch];
};

// Get jobs
export const getAuftraege = async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:8088//restapi/auftrag'); // ToDo: add proxy for /restapi/auftrag
		console.log('Response', res.data);

		dispatch({
			type: GET_AUFTRAEGE,
			payload: res.data
		});
	} catch (error) {
		console.log('Error:', error);
		dispatch({
			type: AUFTRAG_ERROR,
			payload: error
		});
	}
};

export const getProcessIdAndNameForTask = async (taskName, processId) => {
	try {
		// localStorage.removeItem('taskName');
		// localStorage.removeItem('businessKey');
		//get process instance fpr the task
		const resInstance = await axios.get(`http://localhost:8088/engine-rest/process-instance/${processId}`);
		const businessKey = resInstance.data.businessKey;

		localStorage.setItem('taskName', taskName);
		localStorage.setItem('businessKey', businessKey);
	} catch (error) {
		console.log('Error:', error);
	}
};

// Get selected job
export const getAuftrag = async (taskName, businessKey, dispatch) => {
	try {
		//get job from the process instance
		const resAuftrag = await axios.get(`http://localhost:8088//restapi/auftrag/${businessKey}`); // ToDo: add proxy for /restapi/auftrag
		console.log('Response', resAuftrag.data);

		const newData = { ...resAuftrag.data, taskName };

		dispatch({
			type: GET_AUFTRAG,
			payload: newData
		});
	} catch (error) {
		console.log('Error:', error);
		dispatch({
			type: AUFTRAG_ERROR,
			payload: error
		});
	}
};

// add new job and start process
export const auftragEinplanen = async (job, dispatch) => {
	try {
		// const config = {
		// 	headers: {
		// 		'Content-Type': 'application/json;charset=UTF-8',
		// 		'Access-Control-Allow-Origin': 'http://localhost:3000',
		// 		'Access-Control-Allow-Headers': 'authorization, content-type, xsrf-token',
		// 		'Access-Control-Expose-Headers': 'xsrf-token'
		// 	}
		// };

		// const jobData = {
		// 	...job,
		// 	status: 'angelegt'
		// };

		const res = await axios.post('http://localhost:8088/restapi/auftrag', job);
		console.log('Response', res.data);

		dispatch({
			type: ADD_AUFTRAG,
			payload: res.data
		});
	} catch (error) {
		console.log('Error:', error);
		dispatch({
			type: AUFTRAG_ERROR,
			payload: error
		});
	}
};

// assign a job to an assembler
// export const auftragZuweisen = async (monteur, dispatch) => {
// 	console.log('auftragZuweisen aufgerufen');
// try {
// 	const res = await axios.post('http://localhost:8088/restapi/auftrag', job);
// 	console.log('Response', res.data);

// 	dispatch({
// 		type: ADD_AUFTRAG,
// 		payload: res.data
// 	});
// } catch (error) {
// 	console.log('Error:', error);
// 	dispatch({
// 		type: AUFTRAG_ERROR,
// 		payload: error
// 	});
// }
// };

const AuftragState = (props) => {
	const initState = {
		auftraege: null,
		loading: true,
		selected: null,
		current: null,
		error: null,
		success: true
	};

	const [state, dispatch] = useReducer(auftragReducer, initState);

	return <AuftragContext.Provider value={{ state, dispatch }}>{props.children}</AuftragContext.Provider>;
};

export default AuftragState;
