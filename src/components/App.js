import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  // Add a new item to the shopping list
  function addItem() {
    const newItem = {
      id: Date.now(), // You should use a more reliable method to generate IDs in a real application
      name: "New Item",
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        <button onClick={addItem}>Add Item</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;