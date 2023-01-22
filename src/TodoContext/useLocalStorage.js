import React from "react";

const useLocalStorage = (itemName, initialValue) => {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    /* const item = arreglo (vacio/lleno) */
    const [ item, setItem ] = React.useState(initialValue); 

    React.useEffect( () => {
        setTimeout(() => {
            try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
        
            if( !localStorageItem ){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
        
            setItem(parsedItem);
            setLoading(false); 
            } catch(err) {
            setError(err);
            }
        }, 1000);
    });
    
        const saveItem = ( newItem ) => {
        try{
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch(err) {
            setError(err);
        }
        };
        return { item, saveItem, loading, error }
    }


export { useLocalStorage };