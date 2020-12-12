import { GET_AUFTRAEGE, GET_AUFTRAG, ADD_AUFTRAG, DELETE_AUFTRAG, UPDATE_AUFTRAG, AUFTRAG_FINISHED, AUFTRAG_ERROR, CLEAR_AUFTRAEGE, CLEAR_ERRORS, CLEAR_AUFTRAG } from '../types';

const auftragReducer = (state, action) => {
	switch (action.type) {
		case GET_AUFTRAEGE:
			return {
				...state,
				auftraege: action.payload,
				success: null,
				loading: false
			};
		case GET_AUFTRAG:
			console.log('Reducer:', action.payload);
			return {
				...state,
				selected: action.payload,
				success: null,
				loading: false
			};
		case ADD_AUFTRAG:
			//console.log('Reducer:', state.auftraege);
			return {
				...state,
				auftraege: [action.payload, ...state.auftraege],
				selected: null,
				success: null,
				loading: false
			};
		case AUFTRAG_ERROR:
			//console.log(action.payload);
			return {
				...state,
				error: action.payload,
				success: null,
				loading: false
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		case CLEAR_AUFTRAG:
			return {
				...state,
				selected: null
			};
		default:
			return state;
	}
};

export default auftragReducer;
