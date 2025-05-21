// App.js
import React from 'react';
import { CounterProvider } from './componates/CounterContext';
import Counter from './componates/Counter';

function App() {
  return (
    <CounterProvider>
      <div>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
