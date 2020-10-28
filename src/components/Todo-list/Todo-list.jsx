import React from 'react';
import TodoItem from './Todo-item';
import { connect } from 'react-redux';
import {
	deleteTodo,
	selectTodo,
	editTodo,
	changeAllCompleted,
} from '@models/actions';
import PropTypes from 'prop-types';

const TodoList = ({
	todosArray,
	filter,
	selectTodo,
	deleteTodo,
	editTodo,
	changeAllCompleted,
}) => {
	const filterTodos = (todos, filter) => {
		switch (filter) {
			case 'all':
				return todos;
			case 'active':
				return todos.filter((it) => !it.completed);
			case 'completed':
				return todos.filter((it) => it.completed);
			default:
				return todos;
		}
	};
	const visibleTodos = filterTodos(todosArray, filter);
	const todos = visibleTodos.map((it) => {
		return (
			<li key={it.id}>
				<TodoItem
					title={it.title}
					completed={it.completed}
					onTodoSelect={() => selectTodo(it.id)}
					onTodoDelete={() => deleteTodo(it.id)}
					onTodoEdit={(text) => editTodo(it.id, text)}
					onAllCompletedChange={changeAllCompleted}
				/>
			</li>
		);
	});

	return <ul className="todo-list">{todos}</ul>;
};

const mapStateToProps = ({ todosArray, filter }) => ({
	todosArray,
	filter,
});

const mapDispatchToProps = {
	deleteTodo,
	selectTodo,
	editTodo,
	changeAllCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
	todosArray: PropTypes.arrayOf(PropTypes.object),
	filter: PropTypes.string,
	deleteTodo: PropTypes.func,
	editTodo: PropTypes.func,
	selectTodo: PropTypes.func,
};
