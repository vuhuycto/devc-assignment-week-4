import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import TodoContext from './app/context/todoContext';

export default function App() {
	const [todos, setTodos] = useState([]);

	const init = async () => {
		const storedTodos = await SecureStore.getItemAsync('todos');
		if (storedTodos) setTodos([...JSON.parse(storedTodos)]);
	};

	useEffect(() => {
		init();
	}, []);

	const updateStorage = async (updatedTodos) => {
		setTodos(updatedTodos);
		await SecureStore.setItemAsync('todos', JSON.stringify(updatedTodos));
	};

	const handleCheck = async (item) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === item.id ? { ...todo, completed: !item.completed } : todo
		);
		await updateStorage(updatedTodos);
	};

	const handleDelete = async (item) => {
		const updatedTodos = todos.filter((todo) => todo.id !== item.id);
		await updateStorage(updatedTodos);
	};

	const handleCreate = async (item) => {
		const updatedTodos = [...todos, item];
		await updateStorage(updatedTodos);
	};

	const handleUpdate = async (item) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === item.id ? { ...todo, ...item } : todo
		);
		await updateStorage(updatedTodos);
	};

	return (
		<TodoContext.Provider
			value={{ todos, handleCheck, handleDelete, handleCreate, handleUpdate }}
		>
			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer>
		</TodoContext.Provider>
	);
}
