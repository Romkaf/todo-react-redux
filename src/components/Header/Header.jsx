import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, selectAllTodo } from '@models/actions';
import styles from './Header.module.scss';
import { keyCode } from '@constants/constants';
import classNames from 'classnames';

class Header extends Component {
	state = {
		value: '',
	};

	handleValidateValue = (evt) => {
		const validateValue = evt.target.value.trim().replace(/\s+/g, ' ');
		if (validateValue) this.props.addTodo(validateValue);
		this.setState({ value: '' });
	};

	handleInputBlur = (evt) => {
		if (evt.type === 'blur') {
			this.handleValidateValue(evt);
		}
	};

	handleInputEnter = (evt) => {
		if (evt.keyCode === keyCode.ENTER) {
			this.handleValidateValue(evt);
		}
	};

	handleInputChange = (evt) => this.setState({ value: evt.target.value });

	render() {
		const {
			header,
			header__title,
			header__choiceAll,
			header__choiceAll_selected,
			header__input,
		} = styles;
		const { todosArray, selectAllTodo } = this.props;
		const className = classNames(header__choiceAll, {
			hidden: !todosArray.length,
			[header__choiceAll_selected]: todosArray.every((it) => it.completed),
		});

		return (
			<header className={header}>
				<h1 className={header__title}>ToDo</h1>
				<span className={className} onClick={selectAllTodo}>
					&#8249;
				</span>
				<input
					className={header__input}
					type="text"
					placeholder="Что надо сделать?"
					onChange={this.handleInputChange}
					value={this.state.value}
					onBlur={this.handleInputBlur}
					onKeyDown={this.handleInputEnter}
				/>
			</header>
		);
	}
}

const mapStateToProps = ({ todosArray }) => ({
	todosArray,
});

const mapDispatchToProps = {
	addTodo,
	selectAllTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
	todosArray: PropTypes.arrayOf(PropTypes.object),
	addTodo: PropTypes.func,
	selectAllTodo: PropTypes.func,
};
