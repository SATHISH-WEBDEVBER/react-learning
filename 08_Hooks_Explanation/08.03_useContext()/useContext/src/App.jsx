// A Theme Toggle App using useContext Hook in React.
// React இல் useContext ஹூக் பயன்படுத்தி தீம் மாற்றும் செயலி.

import React, { createContext, useState } from "react";
import Container from "./components/Container";
import "./App.css"; // Importing external CSS file
// வெளிப்புற CSS கோப்பை இணைக்கப்படுகிறது

// Creating a context named ThemeContext
// ThemeContext எனும் Context உருவாக்கப்படுகிறது
export const ThemeContext = createContext();

function App() {
  // Declare a state variable 'theme' with initial value 'light'
  // 'theme' என்ற நிலை மாறி 'light' என்ற ஆரம்ப மதிப்புடன் அறிவிக்கப்படுகிறது
  const [theme, setTheme] = useState("light");

  // Function to toggle between 'light' and 'dark' themes
  // 'light' மற்றும் 'dark' தீம்களுக்கிடையே மாற்றும் செயல்பாடு
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    // Providing theme and toggle function to all child components
    // அனைத்து குழந்தை கூறுகளுக்கும் theme மற்றும் toggle செயல்பாட்டை வழங்குகிறது
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        {/* Theme toggle button */}
        {/* தீமை மாற்றும் பட்டன் */}
        <button className="toggle-btn" onClick={toggleTheme}>
          Toggle Theme
        </button>

        {/* Main heading */}
        {/* முக்கிய தலைப்பு */}
        <h1>App Component</h1>

        {/* Container component rendering */}
        {/* Container கூறு காட்டப்படுகிறது */}
        <Container />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
// Exporting App component
// App கூறு ஏற்றுமதி செய்யப்படுகிறது
