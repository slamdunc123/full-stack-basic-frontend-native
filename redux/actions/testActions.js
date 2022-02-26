import { GET_TESTS } from './types';
import axios from 'axios';

const uri = 'https://full-stack-basic-backend.herokuapp.com';
// get tests

export const getTests = () => async (dispatch) => {
	try {
		const res = await axios.get(`${uri}/api/tests`);
		dispatch({
			type: GET_TESTS,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};
