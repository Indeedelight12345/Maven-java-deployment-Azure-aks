import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/items`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Error fetching items:", err));
  }, []);

  const handleAdd = () => {
    if (!newItem) return;
    fetch(`${API_URL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItem })
    })
      .then(res => res.json())
      .then(data => setItems(prev => [...prev, data]))
      .catch(err => console.error("Error adding item:", err));
    setNewItem("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Three-Tier App Demo</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={handleAdd} style={{ marginLeft: "10px" }}>Add</button>
      </div>

      <h2>Items:</h2>
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
