import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


// import './App.css';

const todos = [
  {
    text: 'Cortar cebolla', completed: false
  },
  {
    text: 'Tomar el curso de intro React', completed: false
  },
  {
    text: 'Llorar con la llorona', completed: false
  },
  
]

const App = () => {
  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          // cuando renderizamos elementos, debemos usar la prop key que sera como un identificador unico.
          <TodoItem key={todo.text} text= {todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
