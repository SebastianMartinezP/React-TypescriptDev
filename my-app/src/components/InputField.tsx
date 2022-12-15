import React, { useRef } from 'react';
import './styles.css';


// esta interfaz guarda toda accion o propiedad que queremos pasar desde el otro lado.
interface Props {
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e: React.FormEvent) => void;
}


// le entregamos el state como parametro, casteado a la interfaz creada arriba.
// const InputField = ({todo, setTodo}: Props) =>... forma 1
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => { // forma 2
    const inputRef = useRef<HTMLInputElement>(null); // usamos un hook para pillar el input, casteado a HTMLInputElement




    return (
        <div>
            {/*la funcion se aplica dentro del submit, 
            podemos agregar cualquier funcion desde afuera mientras este en Props*/}
            <form className='input' onSubmit={(e) => {
                    handleAdd(e)
                    // le agregamos la referencia del input, para agregar el blur
                    inputRef.current?.blur();
                }}>
                <input 
                    ref={inputRef}
                    type="input" placeholder='Enter a task' 
                    className='input__box' // BEM convention of writing css class names
                    value={todo} // seteamos el valor del todo
                    onChange={(e) => setTodo(e.target.value)} // seteamos el método que queremos cuando cambie
                />
                <button className='input__submit' type='submit'>GO</button>
            </form>
        </div>
    )
}

export default InputField
