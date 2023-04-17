import React from 'react';

function ShareJoke() {
  return (
    <div>
      <h1>Share Joke</h1>
      <p>Share a joke with your friends:</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="joke">Joke:</label>
        <textarea id="joke" name="joke" rows="4" cols="50"></textarea>
        <button type="submit">Share</button>
      </form>
    </div>
  );
}

export default ShareJoke;
