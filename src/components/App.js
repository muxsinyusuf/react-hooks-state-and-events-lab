import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div>
      {isDarkMode ? (
        <div className="App dark">
          <header>
            <h2>Shopster</h2>
            <button onClick={toggleDarkMode}>Dark Mode</button>
          </header>
          <ShoppingList items={itemData} />
        </div>
      ) : (
        <div className="App light">
          <header>
            <h2>Shopster</h2>
            <button onClick={toggleDarkMode}>Dark Mode</button>
          </header>
          <ShoppingList items={itemData} />
        </div>
      )}
    </div>
  );
}

export default App;
