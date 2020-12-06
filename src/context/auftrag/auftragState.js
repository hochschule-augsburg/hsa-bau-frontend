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
		const res = await axios.get('http://localhost:8088//restapi/auftrag');
		console.log('State', res.data);
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
