import Tests from './components/Tests';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';

export default function App() {
	return (
		<Provider store={store}>
			<Tests />
		</Provider>
	);
}
