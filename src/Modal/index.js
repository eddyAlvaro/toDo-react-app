import React from "react";
import ReactDOM from "react-dom";
import './Moda.css'
const Modal = ( {children} ) => {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>
        ,
        document.querySelector("#modal")
    );
}

export { Modal }