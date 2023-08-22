import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const checkPalindrome = (input) => {
    const reversed = input.split('').reverse().join('');
    if (input === reversed) {
      return true;
    } else {
      setResult(reversed);
      return false;
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isPalindrome = checkPalindrome(inputText);
    if (isPalindrome) {
      setResult('It is a palindrome!');
    }
  };

  return (
    <div >
      <h1>Palindrome Checker</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">Check</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default App;
