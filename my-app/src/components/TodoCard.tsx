import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models/TodoModel';
// using react-icons
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import './styles.css'

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) => {
    // estados para cambiar el modo de edición, valores inicializados en falso y con el contenido del todo
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id: number) => {
        // buscamos el todo que coincida con el id
        // tomamos todas las propiedades del todo (... todo), y hacemos "zoom" en isDone
        // invertimos isDone a false
        // y si no coincide con el id, devolvemos el todo
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    };

    const handleDelete = (id: number) => {
        // filtramos, retornamos la lista que no contenga el id dentro
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        // prevenimos que se refresque la página
        e.preventDefault();
        // si el id coincide, entonces el todo entra en modo editar
        setTodos(todos.map((todo) => (todo.id === id? {...todo, todo: editTodo} : todo)));
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]); // cada vez que cambie "edit", el useEffect hará focus en el input


    return (
        <form className='todos__card' onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                // esta en modo edit? si es asi, tira input, si no, pregunta si esta done
                edit ? 
                (
                    <input 
                        ref={inputRef}
                        value={editTodo} 
                        onChange={(e) => setEditTodo(e.target.value)} 
                        className="todo__card--text"
                    />
                ) : 
                (
                    // esta done? si es asi, tira texto tachado, si no, texto normal
                    todo.isDone ?
                        (
                            <s className="todos__card--text">{todo.todo}</s>
                        ) :
                        (
                            <span className="todos__card--text">{todo.todo}</span>
                        )
                )
            }
            <div>
                <span className="icon" onClick={() => {
                    // si no esta en modo edit, y no esta marcado como hecho
                    if (!edit && !todo.isDone) {
                        // cambiamos el edit a true
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default TodoCard
