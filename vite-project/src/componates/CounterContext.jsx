// CounterContext.js
import React, { createContext, useState } from 'react';

// Step 1: Create the Context
export const CounterContext = createContext();

// Step 2: Create the Provider Component
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
