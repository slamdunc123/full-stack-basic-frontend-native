import { GET_TESTS, CREATE_TEST, DELETE_TEST } from './types';
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

// create text

export const createTest = (formData) => async (dispatch) =>{
    console.log(formData);
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = formData
    try {
        const res = await axios.post(`${uri}/api/tests`, body, config)
        console.log(res);

        dispatch({
            type: CREATE_TEST,
            payload: res.data.test
        })

    } catch (err) {
        console.error(err.error)
    }
}


// delete test
export const deleteTest = (id) => async (dispatch) => {
	try {
		await axios.delete(`${uri}/api/tests/${id}`);

		dispatch({
			type: DELETE_TEST,
			payload: id,
		});
	} catch (err) {
		console.error(err.error);
	}
};
