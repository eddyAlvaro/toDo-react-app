import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";
const CreateTodoButton = () => {
    
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
        
    }

    return(
        <button onClick={onClickButton} className="CreateTodoButton">
            +
        </button>
    );
};

export { CreateTodoButton };