import React from 'react';
import TodoItem from './Todo-item';
import { connect } from 'react-redux';
import { deleteTodo, selectTodo, editTodo } from '@models/actions';
import PropTypes from 'prop-types';

const TodoList = ({ todosArray, selectTodo, deleteTodo, editTodo }) => {
	const todos = todosArray.map((it) => {
		return (
			<li key={it.id}>
				<TodoItem
					title={it.title}
					completed={it.completed}
					onTodoSelect={() => selectTodo(it.id)}
					onTodoDelete={() => deleteTodo(it.id)}
					onTodoEdit={(text) => editTodo(it.id, text)}
				/>
			</li>
		);
	});

	return <ul className="todo-list">{todos}</ul>;
};

const mapStateToProps = ({ todosArray }) => ({
	todosArray,
});

const mapDispatchToProps = {
	deleteTodo,
	selectTodo,
	editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
	todosArray: PropTypes.arrayOf(PropTypes.object),
	deleteTodo: PropTypes.func,
	editTodo: PropTypes.func,
	selectTodo: PropTypes.func,
};
