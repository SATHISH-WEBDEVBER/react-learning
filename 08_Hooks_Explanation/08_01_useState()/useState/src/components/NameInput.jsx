// A program that uses useState to store and display the user’s name as they type.

//பயனர் தட்டச்சு செய்யும் பெயரை useState மூலம் சேமித்து காட்டும் செயலி.

import React, { useState } from "react";



// Importing useState hook from React
// React-இல் இருந்து useState ஹூக் கொண்டு வரப்படுகிறது

function NameInput() {
  // Declare a state variable "name" with empty string as initial value
  // "name" எனும் நிலை மாறியை காலியாக ஆரம்பிக்கிறது
  const [name, setName] = useState("");

  return (
    // Root container for name input section
    // பெயர் உள்ளீட்டுக்கான அடிப்படை container
    <div>
      {/* Input field to type the name */}
      {/* பயனர் தனது பெயரை உள்ளிடும் input பெட்டி */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name} // controlled input - state-based value
        onChange={(e) => setName(e.target.value)} // update name on typing
      />

      {/* Greeting message */}
      {/* வாழ்த்து செய்தி */}
      <p>Hello, {name}!</p>
    </div>
  );
}

export default NameInput; // Exporting NameInput component
// NameInput காம்போனென்ட்டை ஏற்றுமதி செய்கிறது
