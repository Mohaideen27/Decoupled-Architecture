import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return (
    <div>
      <h1>Items from Django Backend</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
