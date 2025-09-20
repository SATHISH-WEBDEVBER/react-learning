import React from 'react'
import './App.css';

// Importing both Function and Class Components 
// செயல்பாட்டு (Function) மற்றும் வகுப்பு (Class) காம்போனென்ட்களை கொண்டு வருதல்
import FunctionComponents from "./components/FunctionComponents.jsx";
import CounterClass from './components/ClassComponents.jsx';

// Main App component
// முக்கிய App காம்போனென்ட்
function App() {
  return (
    // Root div for the whole application
    // முழு பயன்பாட்டுக்கான (Application) அடிப்படை div
    <div className="App">
      
      {/* Rendering Functional Component */}
      {/* செயல்பாட்டு காம்போனென்ட் காட்டப்படுகிறது */}
      <FunctionComponents />

      {/* Rendering Class Component */}
      {/* வகுப்பு காம்போனென்ட் காட்டப்படுகிறது */}
      <CounterClass />
    </div>
  )
}

export default App