import React from "react";
import Counter from "./components/Counter";
import NameInput from "./components/NameInput";
import UserProfile from "./components/UserProfile";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="component-box">
        <h1>Welcome to useState Hook Examples</h1>
        <Counter />
        <NameInput />
        <UserProfile />
      </div>
    </>
  );
};

export default App;
