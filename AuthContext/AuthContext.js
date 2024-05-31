import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState('');

  return (
    <AppContext.Provider value={{ category, setCategory }}>
      {children}
    </AppContext.Provider>
  );
};
