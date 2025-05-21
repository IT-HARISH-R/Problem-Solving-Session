// Counter.js
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="text-center p-4">
      <h2 className="text-xl mb-2">Count: {count}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button> 
    </div>
  );
}

export default Counter;
 