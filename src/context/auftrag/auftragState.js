import React, { useContext, useReducer } from 'react';
import AuftragContext from './auftragContext';
import auftragReducer from './auftragReducer';
import axios from 'axios';

import { GET_AUFTRAEGE, GET_AUFTRAG, ADD_AUFTRAG, DELETE_AUFTRAG, CLEAR_SELECTED, AUFTRAG_ERROR } from '../types';

//create custom hook
export const useAuftrag = () => {
	const { state, dispatch } = useContext(AuftragContext);
	return [state, dispatch];
};

//get aufträge
export const getAuftraege = async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:8088//restapi/auftrag'); // ToDo: add proxy for /restapi/auftrag

		dispatch({
			type: GET_AUFTRAEGE,
			payload: res.data
		});
	} catch (error) {
		console.log('Error:', error);
	}
};

//get auftraginfos for selected task on the task-board
export const getSelectedAuftrag = async (taskName, processId, taskId, dispatch) => {
	try {
		//get the process instance for the task
		const resInstance = await axios.get(`http://localhost:8088/engine-rest/process-instance/${processId}`);
		const businessKey = resInstance.data.businessKey;

		//get auftrag from the process instance
		const resAuftrag = await axios.get(`http://localhost:8088//restapi/auftrag/${businessKey}`); // ToDo: add proxy for /restapi/auftrag

		//add taskName and taskId for formhandler
		//formhandler gives it to the taskforms
		const newData = { ...resAuftrag.data, taskName, taskId };

		dispatch({
			type: GET_AUFTRAG,
			payload: newData
		});
	} catch (error) {
		console.log('Error:', error);
	}
};

//clear the selected auftrag for displaying the taskboard
export const clearSelected = (dispatch) => {
	dispatch({
		type: CLEAR_SELECTED
	});
};

//delete auftrag
export const deleteAuftrag = async (id, dispatch) => {
	try {
		const res = await axios.delete(`http://localhost:8088/restapi/auftrag/${id}`);

		dispatch({
			type: DELETE_AUFTRAG,
			payload: res.data
		});
	} catch (error) {
		console.log('Error:', error);
	}
};

//add new auftrag and start process
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
	}
};

//assign an auftrag to an assembler
export const auftragZuweisen = async (data, dispatch) => {
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/zuweisen', data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//complete auftrag
export const auftragAbschliessen = async (data, dispatch) => {
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/abschliessen', data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//approve auftrag
export const auftragGenehmigen = async (data, dispatch) => {
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/genehmigen', data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//check auftrag
export const auftragPruefen = async (data, dispatch) => {
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/pruefen', data);
	} catch (error) {
		console.log('Error:', error);
	}
};

//release auftrag
export const auftragFreigeben = async (data, dispatch) => {
	try {
		const res = await axios.post('http://localhost:8088/restapi/auftrag/freigeben', data);
	} catch (error) {
		console.log('Error:', error);
	}
};

const AuftragState = (props) => {
	const initState = {
		auftraege: null,
		loading: true,
		selected: null,
		error: null
	};

	const [state, dispatch] = useReducer(auftragReducer, initState);

	return <AuftragContext.Provider value={{ state, dispatch }}>{props.children}</AuftragContext.Provider>;
};

export default AuftragState;
