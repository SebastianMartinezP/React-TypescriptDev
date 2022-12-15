import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './models/TodoModel';


const App: React.FC = () => { // function component

	// setear el estado casteado a algun tipo, funcionan las uniones, ex: useState<string | number>();
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	// funcion que se ocupa del añadir un todo a la lista
	const handleAdd = (e: React.FormEvent) => { // entregar tipo a el evento 
		e.preventDefault(); // evita el refresco de la pagina (cancela el comportamiento por defecto de un evento cancelable)

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
			setTodo("");
		}
		console.log(todos);

	};

	return (
		<div className="App">
			<span className="heading">Taskify</span>

			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
