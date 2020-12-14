import { GET_AUFTRAEGE, GET_AUFTRAG, ADD_AUFTRAG, DELETE_AUFTRAG, AUFTRAG_ERROR, CLEAR_SELECTED } from '../types';

const auftragReducer = (state, action) => {
	switch (action.type) {
		case GET_AUFTRAEGE:
			return {
				...state,
				auftraege: action.payload,
				loading: false
			};
		case GET_AUFTRAG:
			return {
				...state,
				selected: action.payload,
				loading: false
			};
		case ADD_AUFTRAG:
			return {
				...state,
				auftraege: [action.payload, ...state.auftraege],
				loading: false
			};
		case DELETE_AUFTRAG:
			return {
				...state,
				auftraege: state.auftraege.filter((auftrag) => auftrag.id !== action.payload),
				loading: false
			};
		case CLEAR_SELECTED:
			return {
				...state,
				selected: null,
				loading: false
			};
		case AUFTRAG_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};

export default auftragReducer;
