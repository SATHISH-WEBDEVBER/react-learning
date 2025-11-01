// A middle-level component that holds Users
// Users கூறை கொண்ட நடுநிலை கூறு

import React from "react";
import Users from "./Users";

function Container() {
  return (
    // Root container for Users section
    // Users பகுதியுக்கான அடிப்படை container
    <div className="container">
      <h2>Container Component</h2>
      <Users />
    </div>
  );
}

export default Container;
// Exporting Container component
// Container கூறு ஏற்றுமதி செய்யப்படுகிறது
