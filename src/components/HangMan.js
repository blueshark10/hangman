
import React, { useState } from 'react';

const Hangman = () => {
  const word = 'HANGMAN';
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(1);

  const maskedWord = word
    .split('')
    .map((letter) => {
      return correctGuesses.includes(letter) ? letter : '_';
    })
    .join(' ');

  const handleGuess = (letter) => {
    if (word.includes(letter)) {
      setCorrectGuesses([...correctGuesses, letter]);
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const handleReset = () => {
    setCorrectGuesses([]);
    setWrongGuesses(1);
  }

  const handleRule = () => {
    alert(`
    1. Word is guessed Randomly
    2. You have 10 Chances to Guess correct
    3. With eaech incorrect guess Hangman figure Proceeds
    4. If figure Completes before the completion of words you lose
    5. You Win if word get guessed before 10 wrong attempts`)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p>{maskedWord}</p>
      <div
        style={{
          background: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 40px',
          borderRadius: '10px',
        }}
      >
        {alphabets.map((letter, index) => (
          <button
            key={index}
            onClick={() => handleGuess(letter)}
            disabled={correctGuesses.includes(letter) || wrongGuesses >= 11}
          >
            {letter}
          </button>
        ))}
      </div>
      {wrongGuesses > 0 && (
        <div>
          <img
            src={`./state${wrongGuesses}.png`}
            alt={`Wrong guess ${wrongGuesses}`}
          />
        </div>
      )}
      {wrongGuesses === 11 && <p>You lost!</p>}
      {!maskedWord.includes('_') && <p style={{color:"green"}}>You won!</p>}
      <button onClick={handleRule}>Help</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Hangman;

