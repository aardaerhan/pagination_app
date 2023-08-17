import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  function showMoreMeals() {
    setVisible(item => item += 3);
  }

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res) => res.json())
    .then((data) => setItems(data.meals))
  },[])

  return (
    <div className="App">
      <h1 className="header">Seafoods</h1>
      <div className="container">
        {items.slice(0,visible).map(item => (
          <div className="card">
            <div className="image">
              <img src={item.strMealThumb}/>
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}
        <button onClick={showMoreMeals}>Click for More Meals</button>
      </div>
    </div>
  );
}

export default App;
