//  App Component — Sends data (name and age) as props to the Welcome component
//  App காம்போனென்ட் — name மற்றும் age என்ற தரவுகளை props ஆக Welcome காம்போனென்டுக்கு அனுப்புகிறது


// Importing React library
// React நூலகத்தை (library) கொண்டு வரப்படுகிறது
import React from "react";

import "./App.css";

// Importing the Welcome component from Props folder
// Props கோப்புறையிலிருந்து Welcome காம்போனென்ட்டை கொண்டு வரப்படுகிறது
import Welcome from "./Props/Welcome.jsx";

// Creating the main App component
// முக்கியமான App காம்போனென்ட்டை உருவாக்குகிறது
function App() {
  return (
    // Root container of the App
    // செயலியின் அடிப்படை (root) container
    <div className="app-container">
      <h1 className="title">Welcome List</h1>
      {/* Passing name and age as props to Welcome component */}
      {/* name மற்றும் age ஆகியவற்றை props ஆக Welcome காம்போனென்ட்டுக்கு அனுப்புகிறது */}
      <Welcome name="Sathish" age={21} />
      <Welcome name="Vishwaa" age={20} />
      <Welcome name="Anitha" age={22} />
    </div>
  );
}

// Exporting App component
// App காம்போனென்ட்டை ஏற்றுமதி செய்கிறது
export default App;
