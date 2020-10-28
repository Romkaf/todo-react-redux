import React, { PureComponent } from 'react';
import Header from '@components/Header';
import TodoList from '@components/Todo-list';
import Footer from '@components/Footer';
import styles from './App.module.scss';
import { locStorKey } from '@constants/constants';
import '@styles/scaffolding.scss';

export default class App extends PureComponent {
	state = {
		todosArray: [],
		filter: 'all',
		allCompleted: false,
	};

	id = 1;

	createTodo(title) {
		return {
			title,
			id: this.id++,
			completed: false,
		};
	}

	handleFilterChange = (filter) => {
		this.setState({
			filter: filter,
		});
	};

	filterTodos = (todos, filter) => {
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

	handleTodoAdd = (text) => {
		this.setState({
			todosArray: [...this.state.todosArray, this.createTodo(text)],
			allCompleted: false,
		});
	};

	handleTodoDelete = (id) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.filter((it) => !(it.id === id)),
			};
		});
	};

	handleCompletedTodoDelete = () => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.filter((it) => !it.completed),
				allCompleted: false,
			};
		});
	};

	handleTodoSelect = (id) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.map((it) => {
					return it.id === id ? { ...it, completed: !it.completed } : it;
				}),
			};
		});

		this.handleAllCompletedChange();
	};

	handleTodoEdit = (id, text) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.map((it) => ({
					...it,
					title: it.id === id ? text : it.title,
				})),
			};
		});
	};

	handleAllTodosSelect = () => {
		const { todosArray, allCompleted } = this.state;
		this.setState({
			todosArray: todosArray.map((it) => ({ ...it, completed: !allCompleted })),
			allCompleted: !allCompleted,
		});
	};

	handleAllCompletedChange = () => {
		this.setState(({ todosArray }) => {
			return {
				allCompleted: todosArray.every((it) => it.completed),
			};
		});
	};

	setLocalStorage = (state, key) => {
		localStorage.setItem(key, JSON.stringify(state));
	};

	loadLocalStorage = () => {
		const state = JSON.parse(localStorage.getItem(locStorKey)) || {
			todosArray: [],
			filter: 'all',
			allCompleted: false,
		};
		const { todosArray, filter, allCompleted } = state;

		this.setState({
			todosArray,
			filter,
			allCompleted,
		});
	};

	componentDidMount() {
		this.loadLocalStorage();
	}

	componentDidUpdate() {
		const { todosArray } = this.state;

		this.setLocalStorage(this.state, locStorKey);
		this.id =
			todosArray.length === 0 ? 1 : todosArray[todosArray.length - 1].id + 1;
	}

	render() {
		const { todosArray, filter } = this.state;

		const visibleTodos = this.filterTodos(todosArray, filter);

		return (
			<div className={styles.app}>
				<Header />
				<main>
					<TodoList />
				</main>
				<Footer />
			</div>
		);
	}
}
