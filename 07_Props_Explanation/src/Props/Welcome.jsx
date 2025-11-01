// Welcome Component — Displays a personalized greeting using props
// Welcome காம்போனென்ட் — props மூலம் தனிப்பட்ட வாழ்த்துச் செய்தியை காட்டுகிறது


// Importing React library
// React நூலகத்தை (library) கொண்டு வரப்படுகிறது
import React from "react";

// Creating a functional component named "Welcome"
// "Welcome" என்ற பெயரில் ஒரு செயல்பாட்டு காம்போனென்ட் உருவாக்கப்படுகிறது
function Welcome(props) {
  return (
// Each card container for displaying name and age
    // name மற்றும் age ஐக் காட்டும் ஒவ்வொரு card container
    <div className="welcome-card">
      <h2>Hello {props.name}!</h2>
      <p>You are {props.age} years old.</p>

      {/* props.name → name property value
          props.age → age property value
          props.name → name பண்பின் மதிப்பு
          props.age → age பண்பின் மதிப்பு */}
    </div>
      
    
  );
}

// Exporting the Welcome component for use in other files
// Welcome காம்போனென்ட்டை பிற கோப்புகளில் பயன்படுத்த ஏற்றுமதி செய்கிறது
export default Welcome;
