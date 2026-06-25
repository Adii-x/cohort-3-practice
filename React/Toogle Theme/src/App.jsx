import React, { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <h1> {theme === "light" ? "Ligth" : "Dark"} Theme</h1>
      <button
        onClick={(prev) => {
          if (theme === "light") setTheme("dark");
          else setTheme("light");
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
