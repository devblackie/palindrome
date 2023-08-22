import React, { useState } from 'react';
import Bitnine from './assets/1643345225600.jpeg'

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const checkPalindrome = (input) => {
    const reversed = input.split('').reverse().join('');
    if (input === reversed) {
      setResult('It is a palindrome!');
    } else {
      setResult(reversed);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkPalindrome(inputText);
  };

  return (
    <div>
      <div className="header"><div className="img"><img src={`${Bitnine}`} alt="bitninelogo" /></div></div>
      <h2>Palindrome Checker</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">Check</button>
      </form>
      <p>
        {result === '' ? null : (
          <span>
            <span style={{ color: 'green' }}>
              {result === 'It is a palindrome!' ? result : null}
            </span>
            <span style={{ color: result !== 'It is a palindrome!' ? 'red' : 'black' }}>
              {result !== 'It is a palindrome!' ? result : null}
            </span>
          </span>
        )}
      </p>
    </div>
  );
}

export default App;
