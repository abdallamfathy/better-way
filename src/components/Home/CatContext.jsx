//make here context provider 
import React, { useState, createContext, useContext } from 'react';

export const CatContext = createContext();
export const useCatContext = () => useContext(CatContext);

export const CatProvider = ({ children }) => {
    const [show, setShow] = useState(true);

      // Function to update the state
  const updateState = (newState) => {
    setShow(newState);
  };

    // Pass the state and update function as part of the context value
    const contextValue = {
        show,
        updateState,
      };
    
    return (
        <CatContext.Provider value={contextValue}>
        {children}
        </CatContext.Provider>
    );
    }
