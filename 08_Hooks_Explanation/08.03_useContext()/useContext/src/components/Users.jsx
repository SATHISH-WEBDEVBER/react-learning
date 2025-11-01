// A component that holds multiple User components
// பல User கூறுகளை கொண்ட கூறு

import React from "react";
import User from "./User.jsx";

function Users() {
  return (
    // Wrapper for user list
    // பயனர் பட்டியலுக்கான பெட்டி
    <div className="users">
      <h3>Users Component</h3>
      <User />
    </div>
  );
}

export default Users;
// Exporting Users component
// Users கூறு ஏற்றுமதி செய்யப்படுகிறது
