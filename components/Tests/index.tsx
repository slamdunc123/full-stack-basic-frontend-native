import React, { useState, useEffect } from 'react';
import TestItems from './TestItems';
import TestFormAdd from './TestFormAdd';
import { useDispatch, useSelector } from 'react-redux';
import {
	getTests,
	createTest,
	deleteTest,
} from '../../redux/actions/testActions';
import { Text, TouchableOpacity } from 'react-native';

const Tests = () => {
	const dispatch = useDispatch();
	const tests = useSelector((state: any) => state.testReducer.tests);
	const [showForm, setShowForm] = useState(false);

	const handleAddOnPress = (formData: object) => {
        console.log(formData);
		dispatch(createTest(formData));
        setShowForm(false)
	};

	const handleDeleteOnPress = (id: string) => {
		dispatch(deleteTest(id));
	};

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);
	return (
		<>
			{!showForm && (
				<TouchableOpacity onPress={() => setShowForm(true)}>
					<Text>Add</Text>
				</TouchableOpacity>
			)}
			{!showForm ? (
				<TestItems
					title='Test Items'
					tests={tests}
					handleDeleteOnPress={handleDeleteOnPress}
				/>
			) : (
				<TestFormAdd
					title='Add Test'
					handleAddOnPress={handleAddOnPress}
				/>
			)}
		</>
	);
};

export default Tests;
