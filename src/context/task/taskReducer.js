import { GET_TASKS, TASK_ERROR, CLEAR_TASKS, CLEAR_ERRORS } from '../types';

const taskReducer = (state, action) => {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				tasks: action.payload,
				success: null,
				loading: false
			};
		case TASK_ERROR:
			return {
				...state,
				error: action.payload,
				success: action.payload.success
			};
		default:
			return state;
	}
};

export default taskReducer;
