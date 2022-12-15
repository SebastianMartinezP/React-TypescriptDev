import React from 'react'
import { Todo } from '../models/TodoModel';
import './styles.css'
import TodoCard from './TodoCard';

interface Props {
    todos: Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className='todos'>
            {
                todos.map((todo) =>(
                <TodoCard 
                    todo={todo} // el todo en cuestion
                    key={todo.id} // una llave para mapearlos
                    todos={todos} // la lista completa para eliminar
                    setTodos={setTodos} // metodo para actualizar la lista
                />
                ))
            }
        </div>
    )
}

export default TodoList
