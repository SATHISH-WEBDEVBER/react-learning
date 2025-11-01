// A simple counter app using the useEffect hook to update the page title dynamically.
// useEffect ஹூக் பயன்படுத்தி பக்கத்தின் தலைப்பை (title) தானாக மாற்றும் எளிய Counter செயலி.

import React, { useState, useEffect } from "react";
import "./App.css"; 
// Importing the external CSS file for styling
// வடிவமைப்பிற்காக (styling) வெளிப்புற CSS கோப்பை இணைக்கப்படுகிறது

function App() {
  // Step 1: Declare a state variable "count" with initial value 0
  // படி 1: "count" என்ற நிலை மாறியை 0 என்ற ஆரம்ப மதிப்புடன் அறிவிக்கிறது
  const [count, setCount] = useState(0);

  // Step 2: useEffect runs every time when 'count' changes
  // படி 2: 'count' மதிப்பு மாறும் ஒவ்வொரு முறையும் useEffect இயங்கும்
  useEffect(() => {
    // Update the document (tab) title dynamically
    // பக்கத்தின் தலைப்பை (tab title) தானாக மாற்றுகிறது
    document.title = `You clicked ${count} times`;
  }, [count]); 
  // The effect depends on 'count' → runs only when count changes
  // இந்த effect 'count' மீது சார்ந்தது → count மாறும் போது மட்டுமே இயங்கும்

  // Step 3: Return JSX UI
  // படி 3: JSX மூலம் UI ஐ திருப்பி அளிக்கிறது
  return (
    // Root container for counter section
    // Counter பகுதியுக்கான அடிப்படை (root) container
    <div className="container">
      {/* Heading section */}
      {/* தலைப்பு பகுதி */}
      <h2>React useEffect Example</h2>

      {/* Display the current count */}
      {/* தற்போதைய எண்ணிக்கையை காட்டுகிறது */}
      <p>You clicked <b>{count}</b> times!</p>

      {/* Button to increase the count by 1 */}
      {/* எண்ணிக்கையை 1 ஆக அதிகரிக்க பட்டன் */}
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* Button to reset the count back to 0 */}
      {/* எண்ணிக்கையை மீண்டும் 0 ஆக மாற்ற பட்டன் */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App; 
// Exporting the App component
// App காம்போனென்ட்டை ஏற்றுமதி செய்கிறது
