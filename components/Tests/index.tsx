import React, {useEffect} from 'react';
import TestItems from './TestItems';
import { useDispatch, useSelector } from 'react-redux';
import {getTests} from '../../redux/actions/testActions'

const Tests = () => {
    const dispatch = useDispatch();
	const tests = useSelector((state: any) => state.testReducer.tests);

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);
	return <TestItems tests={tests}/>;
};

export default Tests;
