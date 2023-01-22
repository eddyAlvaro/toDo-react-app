import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = () => {
    const {error, loading, searchTodos, completeTodos, deleteTodos, openModal, setOpenModal,} = React.useContext(TodoContext);
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Desesperate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchTodos.length) && <p>Crea tu primer TODO!!!</p>}
            
                {searchTodos.map(todo => (
                // cuando renderizamos elementos, debemos usar la prop key que sera como un identificador unico.
                    <TodoItem 
                        completed ={todo.completed} 
                        key={todo.text} 
                        text= {todo.text}
                        onComplete = {() => {completeTodos(todo.text)}}
                        onDelete = {() => {deleteTodos(todo.text)}}
                    />
                ))}
            </TodoList>
            { openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal= {setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };