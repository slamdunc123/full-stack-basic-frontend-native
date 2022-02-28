import React, { useState } from 'react';
import { StyleSheet, StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native';

interface TestFormAddProps {
	title: string;
    handleAddOnPress: (formData: object) => void
}
const TestFormAdd = ({ title, handleAddOnPress }: TestFormAddProps) => {
	const [formData, setFormData] = useState({
		_id: '',
		name: '',
	});


	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<TextInput
				onChangeText={(name) => setFormData({...formData, name})}
				value={formData.name}
				style={styles.input}
			/>
            <TouchableOpacity onPress={() => handleAddOnPress(formData)}><Text>Add</Text></TouchableOpacity>
		</View>
	);
};

export default TestFormAdd;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	title: {
		fontSize: 48,
		fontWeight: 'bold',
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
