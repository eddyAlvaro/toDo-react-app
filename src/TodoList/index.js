import React from "react";
import './TodoList.css';

const TodoList = (props) => {
    return(
        <section>
            {props.children}
        </section>
    );
};

export { TodoList };