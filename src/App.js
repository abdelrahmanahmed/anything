import React, { useState, useEffect } from 'react'
import Categories from './data/Categories.json'
import Btn from './components/Btn'
import { getRandomCategory } from './helpers'
import './styles/App.scss'

function App() {
  const [categories] = useState(Categories)
  const [category, setCategory] = useState('games')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setCategory(category)
  }, [category])

  const handleCategory = (e) => {
    setCategory(e)
  }

  const handleClickMe = () => {
    setIsLoading(true)
    let selectedCategory = categories[category].list
    setResult(getRandomCategory(selectedCategory, result))
  }
  return (
    <div className="App">
      <h1 id="title">
        Bored?{' '}
        <span role="img" aria-label="emoji">
          &#128580;
        </span>{' '}
        see what you can do now
      </h1>
      <div id="categories-container">
        {Object.keys(categories).map((e) => (
          <span
            onClick={() => {
              handleCategory(e)
            }}
            key={e}
            className={category === e ? 'tag active' : 'tag'}
          >
            {categories[e].label} {categories[e].emoji}
          </span>
        ))}
      </div>

      <Btn
        value={isLoading ? 'Loading...' : 'Click Me'}
        onClick={handleClickMe}
        disabled={isLoading}
      />
      {result ? (
        <div className="result">
          <div className="card">
            {isLoading ? (
              <div className="lds-hourglass" />
            ) : (
              <div className="container">
                <h4>
                  <b>{result.name}</b>
                </h4>
              </div>
            )}

            <img
              style={isLoading ? { display: 'none' } : {}}
              onLoad={() => {
                setIsLoading(false)
              }}
              src={result.url}
              alt={result.name}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
