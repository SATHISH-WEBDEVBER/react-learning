import React, { useState, useEffect } from "react";

function FunctionComponents() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count updated");
    return () => {
      console.log("Component will unmount");
    };
  }, [count]);

  // Inline style object
  const containerStyle = {
    border: "2px solid #4CAF50",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px",
    textAlign: "center",
    backgroundColor: "#f0fff4",
    width: "250px",
  };

  const buttonStyle = {
    padding: "10px 15px",
    margin: "5px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#2E7D32" }}>Function Component Counter</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Count: {count}</p>
      <button
        style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white" }}
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
}

export default FunctionComponents;
