// A useState example that manages an object with multiple fields (name and age) using the spread operator.

// பல புலங்கள் (பெயர் மற்றும் வயது) கொண்ட object-ஐ useState மற்றும் spread operator மூலம் நிர்வகிக்கும் உதாரணம்.

import React, { useState } from "react";

// Importing useState hook from React
// React-இல் இருந்து useState ஹூக் கொண்டு வரப்படுகிறது

function UserProfile() {
  // Create a state variable "user" with name and age properties
  // "user" என்ற state மாறியில் name மற்றும் age எனும் சொத்துகள் (properties) உள்ளன
  const [user, setUser] = useState({ name: "", age: "" });

  // Function to handle input changes
  // Input-ல் மாற்றம் ஏற்பட்டால் அதைச் சீர்செய்யும் செயல்பாடு
  const handleChange = (e) => {
    const { name, value } = e.target; // extract name & value from input
    // input-இல் இருந்து name மற்றும் value எடுக்கப்படுகிறது

    setUser({ ...user, [name]: value }); 
    // spread operator (...) மூலம் user object இல் ஒரு property மட்டும் புதுப்பிக்கப்படுகிறது
  };

  return (
    // Root container for user profile input
    // பயனர் விவரங்கள் உள்ளீட்டுக்கான container
    <div>
      {/* Input field for user name */}
      {/* பயனரின் பெயருக்கான input பெட்டி */}
      <input name="name" onChange={handleChange} placeholder="Name" />

      {/* Input field for user age */}
      {/* பயனரின் வயதுக்கான input பெட்டி */}
      <input name="age" onChange={handleChange} placeholder="Age" />

      {/* Display user details dynamically */}
      {/* பயனர் பெயர் மற்றும் வயது விவரங்கள் தானாக (Dynamic) காட்டப்படும் */}
      <p>{user.name} is {user.age} years old.</p>
    </div>
  );
}

export default UserProfile; // Exporting UserProfile component
// UserProfile காம்போனென்ட்டை ஏற்றுமதி செய்கிறது
