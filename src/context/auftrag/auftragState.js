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
		dispatch({
			type: GET_AUFTRAEGE,
			payload: res.data
		});
	} catch (error) {
		console.log('Error:', error);
		dispatch({
			type: AUFTRAG_ERROR,
			payload: error.response.data
		});
	}
};

// add new job and start process
export const auftragEinplanen = async (job, dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				'Access-Control-Allow-Origin': 'http://localhost:3000'
			}
		};

		// const jobData = {
		// 	...job,
		// 	status: 'angelegt'
		// };

		const res = await axios.post('http://localhost:8088//restapi/auftrag', job, config);
		console.log('Response', res.data);

		dispatch({
			type: ADD_AUFTRAG,
			payload: res.data
		});
	} catch (error) {
		console.log('Error:', error.response.data);
		dispatch({
			type: AUFTRAG_ERROR,
			payload: error.response.data
		});
	}
};

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
