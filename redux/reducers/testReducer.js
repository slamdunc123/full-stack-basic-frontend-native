import { GET_TESTS, CREATE_TEST, DELETE_TEST } from '../actions/types';

const initialState = {
	tests: [],
};

export default function testReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_TESTS:
			console.log('GET_TESTS called');
			return {
				...state,
				tests: payload,
			};

		case CREATE_TEST:
			console.log('CREATE_TEST called', payload);
			return {
				...state,
				tests: [...state.tests, payload],
			};

		case DELETE_TEST:
			console.log('DELETE_TEST called');
			return {
				...state,
				tests: state.tests.filter((test) => test._id != payload),
			};

		default:
			return state;
	}
}
