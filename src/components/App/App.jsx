import React from 'react';
import Header from '@components/Header';
import TodoList from '@components/Todo-list';
import Footer from '@components/Footer';
import styles from './App.module.scss';

const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<main>
				<TodoList />
			</main>
			<Footer />
		</div>
	);
};

export default App;
