import React, { Component } from "react";

class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Class Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count updated:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("Class Component will unmount");
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const containerStyle = {
      border: "2px solid #2196F3",
      borderRadius: "12px",
      padding: "20px",
      margin: "20px",
      textAlign: "center",
      backgroundColor: "#e3f2fd",
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
        <h2 style={{ color: "#1565C0" }}>Class Component Counter</h2>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Count: {this.state.count}
        </p>
        <button
          style={{ ...buttonStyle, backgroundColor: "#2196F3", color: "white" }}
          onClick={this.increase}
        >
          Increase
        </button>
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
