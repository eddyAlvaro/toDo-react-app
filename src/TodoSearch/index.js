import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

const TodoSearch = () => {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    };

    return (
        <React.Fragment>
            <input
            onChange={onSearchValueChange} 
            value={searchValue}
            className="TodoSearch"
            placeholder="cebolla"
            />
        </React.Fragment> 
    );
};

export { TodoSearch };