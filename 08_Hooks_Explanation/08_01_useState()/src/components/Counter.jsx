//A simple counter app using the useState hook to increase, decrease, and reset a number.

//எண்ணிக்கையை அதிகரிக்க, குறைக்க மற்றும் மீட்டமைக்க useState ஹூக் பயன்படுத்திய எளிய Counter செயலி.

import React, { useState } from "react";



// Importing useState hook from React
// React-இல் இருந்து useState ஹூக் (hook) கொண்டு வரப்படுகிறது

function Counter() {
  // Declare a state variable "count" with initial value 0
  // "count" எனும் நிலை மாறியை 0 என்ற ஆரம்ப மதிப்புடன் அறிவிக்கிறது
  const [count, setCount] = useState(0); // initial value = 0

  return (
    // Root container for counter section
    // Counter பகுதியுக்கான அடிப்படை container
    <div>
      {/* Display the current count */}
      {/* தற்போதைய எண்ணிக்கையை காட்டுகிறது */}
      <h2>Count: {count}</h2>

      {/* Button to increase count by 1 */}
      {/* எண்ணிக்கையை 1 ஆக அதிகரிக்கவும் */}
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* Button to decrease count by 1 */}
      {/* எண்ணிக்கையை 1 ஆக குறைக்கவும் */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/* Button to reset count to 0 */}
      {/* எண்ணிக்கையை மீண்டும் 0 ஆக மாற்றவும் */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter; // Exporting Counter component
// Counter காம்போனென்ட்டை ஏற்றுமதி செய்கிறது
