// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	StatusBar,
	Alert,
	TouchableOpacity,
} from 'react-native';

interface TestItem {
	item: {
		_id: string;
		name: string;
	};
}

interface Test {
	_id: string;
	name: string;
}

interface TestItemsProps {
	tests: Test[];
}

const TestItems = ({ tests }: TestItemsProps) => {
	const renderItems = ({ item }: TestItem) => {
		return (
			<View style={styles.item}>
				<Text style={styles.name}>{item.name}</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => Alert.alert('edit button pressed')}
						style={styles.buttonEdit}
					>
						<Text style={styles.buttonText}>Edit</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => Alert.alert('delete button pressed')}
						style={styles.buttonDelete}
					>
						<Text style={styles.buttonText}>Delete</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{tests.length > 0 ? (
				<FlatList
					data={tests}
					renderItem={renderItems}
					keyExtractor={(item) => item._id}
					// contentContainerStyle={{flexGrow: 1, justifyContent: 'center',}}
				/>
			) : (
				<Text>nothing to show</Text>
			)}
			{/* <StatusBar style='auto' /> */}
		</View>
	);
};

export default TestItems;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#fff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,

		elevation: 12,
	},
	name: {
		fontSize: 32,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	buttonEdit: {
		alignItems: 'center',
		backgroundColor: 'orange',
		padding: 5,
		margin: 5,
		width: 75,
	},
	buttonDelete: {
		alignItems: 'center',
		backgroundColor: 'red',
		padding: 5,
		margin: 5,
		width: 75,
	},
	buttonText: {
		color: 'white',
	},
});
