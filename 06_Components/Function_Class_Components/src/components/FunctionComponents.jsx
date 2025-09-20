import React, { useState, useEffect } from "react";

// Functional Component creation
// செயல்பாட்டு (Functional) காம்போனென்ட் உருவாக்கம்
function FunctionComponents() {
  // useState hook with count state
  // useState மூலம் count நிலை (state) உருவாக்கப்படுகிறது
  const [count, setCount] = useState(0);

  // useEffect hook - Runs when component mounts or count changes 
  // useEffect - காம்போனென்ட் ஏற்றப்படும் போது அல்லது count மாறும் போது இயங்கும் 
  useEffect(() => {
    console.log("Component mounted or count updated");

    // Cleanup function - Runs before component unmount 
    // சுத்தப்படுத்தும் செயல்பாடு - காம்போனென்ட் நீக்கப்படும் முன் இயங்கும் 
    return () => {
      console.log("Component will unmount");
    };
  }, [count]); // Dependency array with count 
               // count மதிப்பு மாறும் போதே இயங்கும் 

  // Inline style object for container 
  // பெட்டிக்கான (container) வடிவமைப்பு 
  const containerStyle = {
    border: "2px solid #4CAF50",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px",
    textAlign: "center",
    backgroundColor: "#f0fff4",
    width: "250px",
  };

  // Inline style object for buttons 
  // பொத்தான்களின் (buttons) வடிவமைப்பு 
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
      {/* Heading of the component */}
      {/* காம்போனென்ட் தலைப்பு */}
      <h2 style={{ color: "#2E7D32" }}>Function Component Counter</h2>

      {/* Displaying the count value  */}
      {/* Count மதிப்பை காட்டுகிறது */}
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Count: {count}</p>

      {/* Button to increase count */}
      {/* Count ஐ அதிகரிக்கும் பொத்தான் */}
      <button
        style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white" }}
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      {/* Button to decrease count */}
      {/* Count ஐ குறைக்கும் பொத்தான்*/}
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