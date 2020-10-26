import {
	ADD_TODO,
	DELETE_TODO,
	SELECT_TODO,
	EDIT_TODO,
	SELECT_ALL_TODO,
	DELETE_COMPLETED_TODO,
	ALL_COMPLETED_CHANGE,
	FILTER_CHANGE,
} from './actionTypes';

const addTodo = (text) => {
	return {
		type: ADD_TODO,
		payload: text,
	};
};

const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};

const selectTodo = (id) => {
	return {
		type: SELECT_TODO,
		payload: id,
	};
};

const selectAllTodo = () => {
	return {
		type: SELECT_ALL_TODO,
	};
};

const editTodo = (idx, text) => {
	return {
		type: EDIT_TODO,
		payload: { idx, text },
	};
};

const deleteComoletedTodo = () => {
	return {
		type: DELETE_COMPLETED_TODO,
	};
};

const changeAllCompleted = () => {
	return {
		type: ALL_COMPLETED_CHANGE,
	};
};

const changeFilter = (filter) => {
	return {
		type: FILTER_CHANGE,
		payload: filter,
	};
};

export {
	addTodo,
	deleteTodo,
	selectTodo,
	selectAllTodo,
	editTodo,
	deleteComoletedTodo,
	changeAllCompleted,
	changeFilter,
};
