import React, { useState } from 'react';
import Joke from './Joke';
import JokesAPI from '../Data/JokesAPI';
import NextButton from './NextButton';

function JokeContainer() {
  const [jokeNumber, setJokeNumber] = useState(Math.floor(Math.random() * 10));

  const jokeElements = JokesAPI.map((joke, index) => {
    return <Joke key={index} setup={joke.setup} punchline={joke.punchline} />;
  });

  function handleNextJoke() {
    setJokeNumber(Math.floor(Math.random() * 10));
  }

  return (
    <section className="main-container">
      {jokeElements[jokeNumber]}
      <NextButton onNextJoke={handleNextJoke} />
    </section>
  );
}

export default JokeContainer;
