import React, { useContext } from 'react';

import Screen from './Screen';
import TodoList from '../components/todo/TodoList';
import TodoContext from '../context/todoContext';

function ActiveScreen(props) {
	const todoContext = useContext(TodoContext);

	return (
		<Screen>
			<TodoList
				data={todoContext.todos.filter((todo) => !todo.completed)}
				onCheck={(item) => todoContext.handleCheck(item)}
				onDelete={(item) => todoContext.handleDelete(item)}
			/>
		</Screen>
	);
}

export default ActiveScreen;
