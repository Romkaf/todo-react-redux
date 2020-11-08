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

export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		payload: text,
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};

export const selectTodo = (id) => {
	return {
		type: SELECT_TODO,
		payload: id,
	};
};

export const selectAllTodo = () => {
	return {
		type: SELECT_ALL_TODO,
	};
};

export const editTodo = (idx, text) => {
	return {
		type: EDIT_TODO,
		payload: { idx, text },
	};
};

export const deleteComoletedTodo = () => {
	return {
		type: DELETE_COMPLETED_TODO,
	};
};

export const changeAllCompleted = () => {
	return {
		type: ALL_COMPLETED_CHANGE,
	};
};

export const changeFilter = (filter) => {
	return {
		type: FILTER_CHANGE,
		payload: filter,
	};
};
