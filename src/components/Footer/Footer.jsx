import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Filter from './Filter';
import BtnClearCompleted from './Btn-clear-completed';
import { connect } from 'react-redux';
import { deleteComoletedTodo, changeFilter } from '@models/actions';
import styles from './Footer.module.scss';

const Footer = ({ todosArray, deleteComoletedTodo, changeFilter, filter }) => {
	const activeTodoCount = todosArray.filter((it) => it.completed === false)
		.length;
	const completedTodoCount = todosArray.length - activeTodoCount;

	if (todosArray.length === 0) {
		return null;
	}

	return (
		<footer className={styles.footer}>
			<Counter activeTodosAmount={activeTodoCount} />
			<Filter onFilterChange={changeFilter} filter={filter} />
			<BtnClearCompleted
				completedTodosAmount={completedTodoCount}
				onCompletedDelete={deleteComoletedTodo}
			/>
		</footer>
	);
};

const mapStateToProps = ({ todosArray, filter }) => ({
	todosArray,
	filter,
});

const mapDispatchToProps = { deleteComoletedTodo, changeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

Footer.propTypes = {
	todosArray: PropTypes.arrayOf(PropTypes.object),
	changeFilter: PropTypes.func,
	filter: PropTypes.string,
	deleteComoletedTodo: PropTypes.func,
};
