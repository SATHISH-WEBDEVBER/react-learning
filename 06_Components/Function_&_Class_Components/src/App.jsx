import React from 'react'
import './App.css';

// Importing both Function and Class Components
import FunctionComponents from "./components/FunctionComponents.jsx";
import CounterClass from './components/ClassComponents.jsx';

function App() {
  return (
    <div className="App">
      <FunctionComponents />
      <CounterClass />
    </div>
  )
}

export default App
