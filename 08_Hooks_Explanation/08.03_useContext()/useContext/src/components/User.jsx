// A child component that consumes the ThemeContext
// ThemeContext-இல் உள்ள தரவைப் பெறும் குழந்தை கூறு

import React, { useContext } from "react";
import { ThemeContext } from "../App.jsx";
import "../App.css"; // Separate CSS file for User
// User கூறுக்கான தனி CSS கோப்பு

function User() {
  // Accessing theme value and toggle function from context
  // context-இல் இருந்து theme மற்றும் toggle செயல்பாட்டை பெறுகிறது
  const { theme } = useContext(ThemeContext);

  return (
    // Rendering styled content based on theme
    // theme அடிப்படையில் வடிவமைக்கப்பட்ட உள்ளடக்கத்தை காட்டுகிறது
    <div className={`user-card ${theme}`}>
      <h4>User Component</h4>
      <p>
        Current Theme: <b>{theme}</b>
      </p>
    </div>
  );
}

export default User;
// Exporting User component
// User கூறு ஏற்றுமதி செய்யப்படுகிறது
