//make here context provider 
import React, { useState, createContext, useContext } from 'react';

export const CatContext = createContext();
export const useCatContext = () => useContext(CatContext);

export const CatProvider = ({ children }) => {
    const [show, setShow] = useState(true);
    
    return (
        <CatContext.Provider value={{ show, setShow }}>
        {children}
        </CatContext.Provider>
    );
    }
