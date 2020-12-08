import { GET_TASKS, TASK_ERROR, CLEAR_TASKS, CLEAR_ERRORS } from '../types';

const taskReducer = (state, action) => {
	switch (action.type) {
		case GET_TASKS:
			console.log('reducer');
			return {
				...state,
				tasks: action.payload,
				success: action.payload.success,
				loading: false
			};
		case TASK_ERROR:
			return {
				...state,
				error: action.payload.msg,
				success: action.payload.success
			};
		case CLEAR_TASKS:
			return {
				...state,
				tasks: null
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};

export default taskReducer;
