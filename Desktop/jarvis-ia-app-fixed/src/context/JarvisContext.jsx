import React, { createContext, useState } from 'react';

export const JarvisContext = createContext();

export const JarvisProvider = ({ children }) => {
  const [mode, setMode] = useState('normal');
  const [history, setHistory] = useState([]);

  const addCommand = (command, response) => {
    setHistory(prev => [...prev, { command, response }]);
  };

  return (
    <JarvisContext.Provider value={{ mode, setMode, history, addCommand }}>
      {children}
    </JarvisContext.Provider>
  );
};