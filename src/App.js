import React from 'react';
import './App.css';
import HelloMessage from './Components/HelloWorld';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <HelloMessage name="Bilal" />
    </div>
  );
}

export default App;
