import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormEvent = React.FormEvent<HTMLFormElement>;

interface ITodo {
	text: string;
	complete: boolean;
}

export default function App(): JSX.Element {
	const [ value, setValue ] = useState<string>('');
	const [ todos, setTodos ] = useState<ITodo[]>([]);

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		addTodo(value);
		setValue('');
	};

	const addTodo = (text: string): void => {
		const newTodos: ITodo[] = [ ...todos, { text, complete: false } ];
		setTodos(newTodos);
	};

	const completeTodo = (index: number): void => {
		const newTodos: ITodo[] = [ ...todos ];
		newTodos[index].complete = !newTodos[index].complete;
		setTodos(newTodos);
	};

	const deleteTodo = (index: number): void => {
		const newTodos: ITodo[] = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};
	return (
		<Fragment>
			<h1>Todo List</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => setValue(e.target.value)} value={value} required />
				<button type="submit">submit</button>
			</form>
			{todos.map((todo: ITodo, index: number) => (
				<Fragment key={index}>
					<div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
					<button type="button" onClick={() => completeTodo(index)}>
						{todo.complete ? 'Incomplete' : 'Complete'}
					</button>
					<button type="button" onClick={() => deleteTodo(index)}>
						Delete
					</button>
				</Fragment>
			))}
		</Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById('app-root'));
