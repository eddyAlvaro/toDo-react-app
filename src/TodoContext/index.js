import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const { 
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);

    const [ searchValue, setSearchValue ] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState(false);
    const completedTodos = todos.filter( (todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchTodos = [];

    if( !searchValue.length >= 1) {
        searchTodos = todos;
    } else {
        searchTodos = todos.filter( (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
        })
    }

    const addTodo = ( text ) => {
        const newTodos = [...todos];
        newTodos.push( {
            completed: false,
            text,
        }); 
        saveTodos(newTodos);
    }

    const completeTodos = ( text ) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true; 
        saveTodos(newTodos);
    }

    const deleteTodos = ( text ) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        newTodos.splice( todoIndex,1); 
        saveTodos(newTodos);
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodos,
            addTodo,
            deleteTodos,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };