import React, { Component } from "react";

// Class Component creation 
// வகுப்பு (Class) காம்போனென்ட் உருவாக்கம் 
class ClassComponents extends Component {
  constructor(props) {
    super(props);

    // Initial state with count = 0
    // ஆரம்ப நிலை (State) count = 0 ஆக அமைக்கப்படுகிறது 
    this.state = {
      count: 0,
    };
  }

  // Runs once after component mounts 
  // காம்போனென்ட் முதலில் ஏற்றப்படும் போது ஒருமுறை இயங்கும் 
  componentDidMount() {
    console.log("Class Component mounted");
  }

  // Runs when state or props update 
  // State அல்லது Props மாறியபோது இயங்கும் 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count updated:", this.state.count);
    }
  }

  // Runs before component is removed 
  // காம்போனென்ட் நீக்கப்படும் முன் இயங்கும் 
  componentWillUnmount() {
    console.log("Class Component will unmount");
  }

  // Function to increase count 
  // Count ஐ 1 அதிகரிக்கும் செயல்பாடு 
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Function to decrease count
  // Count ஐ 1 குறைக்கும் செயல்பாடு 
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // Styles for the container 
    // பெட்டியின் வடிவமைப்பு 
    const containerStyle = {
      border: "2px solid #2196F3",
      borderRadius: "12px",
      padding: "20px",
      margin: "20px",
      textAlign: "center",
      backgroundColor: "#e3f2fd",
      width: "250px",
    };

    // Styles for the buttons 
    // பொத்தான்களின் வடிவமைப்பு 
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
        {/* காம்போனென்ட் தலைப்பு  */}
        <h2 style={{ color: "#1565C0" }}>Class Component Counter</h2>

        {/* Displaying the count value  */}
        {/* Count மதிப்பை காட்டுகிறது  */}
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Count: {this.state.count}
        </p>

        {/* Button to increase count  */}
        {/* Count ஐ அதிகரிக்கும் பொத்தான்  */}
        <button
          style={{ ...buttonStyle, backgroundColor: "#2196F3", color: "white" }}
          onClick={this.increase}
        >
          Increase
        </button>

        {/* Button to decrease count  */}
        {/* Count ஐ குறைக்கும் பொத்தான்  */}
        <button
          style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
          onClick={this.decrease}
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default ClassComponents;