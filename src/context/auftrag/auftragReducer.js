import { GET_AUFTRAEGE, GET_AUFTRAG, ADD_AUFTRAG, DELETE_AUFTRAG, UPDATE_AUFTRAG, AUFTRAG_FINISHED, AUFTRAG_ERROR, CLEAR_AUFTRAEGE, CLEAR_ERRORS } from '../types';

const auftragReducer = (state, action) => {
	switch (action.type) {
		case GET_AUFTRAEGE:
			return {
				...state,
				auftraege: action.payload,
				success: action.payload.success,
				loading: false
			};
		case GET_AUFTRAG:
			return {
				...state,
				selected: action.payload.auftrag,
				success: action.payload.success,
				loading: false
			};
		case ADD_AUFTRAG:
			return {
				...state,
				auftraege: [action.payload.auftrag, ...state.auftraege],
				selected: action.payload.auftrag,
				success: action.payload.success,
				loading: false
			};
		case AUFTRAG_ERROR:
			return {
				...state,
				error: action.payload.msg,
				success: action.payload.success
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		case CLEAR_AUFTRAEGE:
			return {
				...state,
				auftraege: null
			};
		default:
			return state;
	}
};

export default auftragReducer;
