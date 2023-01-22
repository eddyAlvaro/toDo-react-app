import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

const TodoForm = () =>{
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo, setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setNewTodoValue('');
        setOpenModal(false);

    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder='cortar la cebolla para el almuerzo'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button--cancel' type='button' onClick={onCancel}>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add' type='submit'>Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };