import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["red", "yellow", "black", "purple", "green", "blue", "white"];
  const [bgColor, setBgColor] = useState("white"); // Default background color

  return (
    <div className="full-screen" style={{ backgroundColor: bgColor }}>
      <div className="content">
        <h1>Background Changer</h1>
        <div className="button-container">
          {colors.map((color) => (
            <button
              key={color}
              className="color-button"
              style={{
                backgroundColor: color,
                color: color === "black" ? "white" : "black",
              }}
              onClick={() => setBgColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
