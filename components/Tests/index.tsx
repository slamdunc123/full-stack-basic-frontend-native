import React, {useEffect} from 'react';
import TestItems from './TestItems';
import { useDispatch, useSelector } from 'react-redux';
import {getTests, deleteTest} from '../../redux/actions/testActions'

const Tests = () => {
    const dispatch = useDispatch();
	const tests = useSelector((state: any) => state.testReducer.tests);

    const handleDeleteOnPress = (id: string) => {
        dispatch(deleteTest(id))
    }

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);
	return <TestItems title='Test Items' tests={tests} handleDeleteOnPress={handleDeleteOnPress}/>;
};

export default Tests;
