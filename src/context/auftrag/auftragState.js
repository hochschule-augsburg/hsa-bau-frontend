import React, { useContext, useReducer } from 'react';
import AuftragContext from './auftragContext';
import auftragReducer from './auftragReducer';
import axios from 'axios';

import { GET_AUFTRAEGE, GET_AUFTRAG, ADD_AUFTRAG, DELETE_AUFTRAG, UPDATE_AUFTRAG, AUFTRAG_FINISHED, AUFTRAG_ERROR, CLEAR_AUFTRAG, CLEAR_AUFTRAEGE, CLEAR_ERRORS } from '../types';

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

// Get job for selected task
export const getAuftrag = async (taskName, processId, taskId, dispatch) => {
	try {
		//get the process instance
		const resInstance = await axios.get(`http://localhost:8088/engine-rest/process-instance/${processId}`);
		const businessKey = resInstance.data.businessKey;
		//const taskId = resInstance.data.id;

		//get job from the process instance
		const resAuftrag = await axios.get(`http://localhost:8088//restapi/auftrag/${businessKey}`); // ToDo: add proxy for /restapi/auftrag
		console.log('Response', resAuftrag.data);

		const newData = { ...resAuftrag.data, taskName, taskId };

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

export const clearAuftrag = (dispatch) => {
	dispatch({
		type: CLEAR_AUFTRAG
	});
};

// add new job and start process
export const auftragEinplanen = async (job, dispatch) => {
	try {
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

//assign a job to an assembler
export const auftragZuweisen = async (data, dispatch) => {
	console.log('Auftrag zuweisen');
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/zuweisen', data);
		console.log('Response', res.data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//complete order
export const auftragAbschliessen = async (data, dispatch) => {
	console.log('Auftrag abschliessen', data);
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/abschliessen', data);
		console.log('Response', res.data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//approve order
export const auftragGenehmigen = async (data, dispatch) => {
	console.log('Auftrag genehmigen', data);
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/genehmigen', data);
		console.log('Response', res.data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//check order
export const auftragPruefen = async (data, dispatch) => {
	console.log('Auftrag prüfen', data);
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/pruefen', data);
		console.log('Response', res.data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//release order
export const auftragFreigeben = async (data, dispatch) => {
	console.log('Auftrag freigeben', data);
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/freigeben', data);
		console.log('Response', res.data);
	} catch (error) {
		console.log('Error:', error);
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
