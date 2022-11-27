import React, { useEffect, useState } from 'react';
import './App.scss';
import COLOR_ARRAY from './colorArray';
import fortunes from './fortunes.json';

function App() {
  const [fortune, setFortune] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [randomColor, setRandomColor] = useState('#3AA7A3');
  const [oldInputValue, setOldInputValue] = useState('');

  const getRandomFortune = () => {
    if (inputValue === '') {
      alert('Please ask a question');
    } else if (oldInputValue === inputValue) {
      alert('Please ask a different question');
    } else {
      let rand = Math.floor(fortunes.length * Math.random());
      setRandomColor(COLOR_ARRAY[rand]);
      setFortune(fortunes[rand]);
      setOldInputValue(inputValue);
    }
  };

  useEffect(() => {
    let timeout;
    if (oldInputValue) {
      timeout = setTimeout(() => {
        alert('Your fortune teller is ready for your next question');
      }, 8000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [oldInputValue]);

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: randomColor }}>
        <div className="heading-container">
          <h2>Fortune Teller</h2>
        </div>
        <div id="fortune-box" style={{ color: randomColor }}>
          {fortune && <p className="fortune-text">{fortune}</p>}

          <div className="input-container">
            <div className="text-container">Ask your question</div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>
          <div className="button-container">
            <button
              className="buttonEffect"
              id="new-fortune"
              style={{ backgroundColor: randomColor }}
              onClick={() => getRandomFortune()}
            >
              Tell me my fortune
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
