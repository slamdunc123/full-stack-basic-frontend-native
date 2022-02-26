import { GET_TESTS } from '../actions/types';

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

		default:
			return state;
	}
}
