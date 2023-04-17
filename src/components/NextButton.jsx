import React from 'react';
import './custom-styles/NextButton.css';

function NextButton(props) {
  function handleNextJoke() {
    let jokeNumber = Math.floor(Math.random() * 10);
    props.onNextJoke(jokeNumber);
  }

  return (
    <div onClick={handleNextJoke} className="button-container">
        <div className='btn-elements'>
        <button className="next-btn">Another
         One!😁</button>
      <span>➡▶</span>
        </div>
      
    </div>
    )
}
export default NextButton