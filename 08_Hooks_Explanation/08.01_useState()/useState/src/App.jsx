// A React application demonstrating multiple examples using the useState Hook.
// useState ஹூக் பயன்படுத்தி பல உதாரணங்களை காட்டும் React செயலி.

import React from "react";
import Counter from "./components/Counter";
import NameInput from "./components/NameInput";
import UserProfile from "./components/UserProfile";
import "./App.css";

// Importing React and three components: Counter, NameInput, and UserProfile
// React மற்றும் மூன்று கூறுகள் (Counter, NameInput, UserProfile) ஆகியவை இங்கே இணைக்கப்படுகின்றன.

const App = () => {
  return (
    // Fragment used as a wrapper without adding extra HTML elements
    // கூடுதல் HTML கூறுகளை சேர்க்காமல் Fragment ஒரு மூடுபாவையாக (wrapper) பயன்படுத்தப்படுகிறது.
    <>
      {/* Main container for all useState examples */}
      {/* அனைத்து useState உதாரணங்களுக்கும் அடிப்படை container */}
      <div className="component-box">
        
        {/* Application heading */}
        {/* செயலியின் தலைப்பு */}
        <h1>Welcome to useState Hook Examples</h1>

        {/* Counter component — increases, decreases, and resets a number */}
        {/* Counter கூறு — எண்ணிக்கையை அதிகரிக்க, குறைக்க மற்றும் மீட்டமைக்க பயன்படுகிறது */}
        <Counter />

        {/* NameInput component — updates name value as the user types */}
        {/* NameInput கூறு — பயனர் எழுதும் பெயரை நேரடியாக புதுப்பிக்கிறது */}
        <NameInput />

        {/* UserProfile component — stores and updates object state (name & age) */}
        {/* UserProfile கூறு — name மற்றும் age ஆகியவற்றைக் கொண்ட Object state-ஐ சேமித்து புதுப்பிக்கிறது */}
        <UserProfile />
      </div>
    </>
  );
};

export default App;
// Exporting App component for rendering in index.js
// App கூறு index.js இல் காட்டப்படுவதற்காக ஏற்றுமதி செய்யப்படுகிறது
