// A simple counter app using the useReducer hook to increase, decrease, and reset a number.
// எண்ணிக்கையை அதிகரிக்க, குறைக்க மற்றும் மீட்டமைக்க useReducer ஹூக் பயன்படுத்திய எளிய Counter செயலி.

import React, { useReducer } from "react";
import "./App.css"; 
// Importing the external CSS file
// வெளிப்புற CSS கோப்பை இணைக்கிறது

// Step 1: Create a reducer function
// படி 1: state எப்படி மாறவேண்டும் என்பதை நிர்ணயிக்கும் reducer function
function reducer(state, action) {
  switch (action.type) {
    // If action type is "increment", increase count by 1
    // action type "increment" என்றால் count ஐ 1 ஆக அதிகரிக்கிறது
    case "increment":
      return { count: state.count + 1 };

    // If action type is "decrement", decrease count by 1
    // action type "decrement" என்றால் count ஐ 1 ஆக குறைக்கிறது
    case "decrement":
      return { count: state.count - 1 };

    // If action type is "reset", set count back to 0
    // action type "reset" என்றால் count ஐ மீண்டும் 0 ஆக அமைக்கிறது
    case "reset":
      return { count: 0 };

    // If no matching action, return the current state as it is
    // எந்த action பொருந்தவில்லை என்றால் தற்போதைய state ஐ 그대로 திருப்பி அளிக்கிறது
    default:
      return state;
  }
}

function App() {
  // Step 2: Initialize state using useReducer
  // படி 2: useReducer மூலம் state மற்றும் dispatch உருவாக்கப்படுகிறது
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // initial state = { count: 0 }

  return (
    // Root container for the counter section
    // Counter பகுதியுக்கான அடிப்படை container
    <div className="app-container">
      {/* Heading for the app */}
      {/* செயலியின் தலைப்பு */}
      <h2 className="title">useReducer Hook Example</h2>

      {/* Display the current count value */}
      {/* தற்போதைய count மதிப்பை காட்டுகிறது */}
      <p className="count-display">Count: {state.count}</p>

      {/* Step 3: Dispatch actions to change the state */}
      {/* படி 3: state மாற்றுவதற்கான செயல்களை அனுப்புகிறது */}
      <div className="btn-group">
        {/* Button to increase count by 1 */}
        {/* எண்ணிக்கையை 1 ஆக அதிகரிக்கவும் */}
        <button className="btn increase" onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>

        {/* Button to decrease count by 1 */}
        {/* எண்ணிக்கையை 1 ஆக குறைக்கவும் */}
        <button className="btn decrease" onClick={() => dispatch({ type: "decrement" })}>
          Decrease
        </button>

        {/* Button to reset count to 0 */}
        {/* எண்ணிக்கையை மீண்டும் 0 ஆக மாற்றவும் */}
        <button className="btn reset" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App; 
// Exporting App component
// App காம்போனென்ட்டை ஏற்றுமதி செய்கிறது
