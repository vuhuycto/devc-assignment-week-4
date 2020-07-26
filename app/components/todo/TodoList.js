import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import TodoItem from './TodoItem';
import TodoItemSeparator from './TodoItemSeparator';

function TodoList({ data, style, onCheck, onDelete }) {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			style={[styles.list, style]}
			ItemSeparatorComponent={() => <TodoItemSeparator />}
			renderItem={({ item }) => (
				<TodoItem
					title={item.name}
					isCompleted={item.completed}
					onCheck={() => onCheck(item)}
					onDelete={() => onDelete(item)}
				/>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	list: {
		width: '100%',
		marginTop: 5,
	},
});

export default TodoList;
