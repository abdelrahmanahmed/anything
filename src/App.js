import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Categories from './Categories';

import Btn from './btn';
import './tag.css'

function App() {
  const [category, setCategory] = useState("games");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCategory(category)
  }, [category])

  const handleCategory = e => {
    setCategory(e);
  }

  const handleClickMe = () => {
    setLoaded(false);
    let selectedCategory = Categories[category];
    let randomIndex = Math.floor(Math.random() * Math.floor(selectedCategory.length));
    console.log(selectedCategory[randomIndex]);
    setResult(selectedCategory[randomIndex])
    setLoaded(true);
  }
  return (
    <div className="App">
      <div id="categories-container">
        {Object.keys(Categories).map(e => (
          <span onClick={() => { handleCategory(e) }} key={e} className={category === e ? "tag active" : "tag"}> {e}</span>
        )
        )}
      </div>

      <Btn value="Click Me" onClick={handleClickMe} disabled={loaded} />
      {result && loaded ?
        (
          <div className="result">
            <div className="card">
              <div className="container">
                <h4><b>{result.name}</b></h4>
              </div>
   
              <img
                // style={setLoaded ? {} : { display: 'none' }}
                onLoad={() => {console.log("WTF");setLoaded(true)}}
                src={result.url} alt={result.name} />

            </div>
          </div>
        )
        : null
      }


    </div>
  );
}

export default App;
