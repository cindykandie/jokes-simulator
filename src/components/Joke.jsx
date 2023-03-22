import NextButton from './NextButton'
import './Joke.css'
import {useState} from 'react'

function Joke(props){
    const [showDiv, setShowDiv] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#3c096c');

    const handleJokeReveal=()=>{
        setShowDiv(!showDiv);
        
    }
    const handleReactionClick = (color) => {
        setBackgroundColor(color);
      }
    return(
        <div className="setup-container">
            <h3>{props.joke.setup}</h3>
            <div className="punchline-container">
            {showDiv && <div className="overlay">
                <p onClick={handleJokeReveal}>Click To Reveal
                </p> 
            </div>}
                <p> <i>"{props.joke.punchline}"</i></p>
                <div  className="reactions-container">
                    <span style={{ backgroundColor }} onClick={() => handleReactionClick('#000')}>😍😍</span>
                    <span style={{ backgroundColor }} onClick={() => handleReactionClick('#000')}>😘😘</span>
                    <span style={{ backgroundColor }} onClick={() => handleReactionClick('#000')}>😣😣</span>
                    <span style={{ backgroundColor }} onClick={() => handleReactionClick('#000')}>😫😫</span>
                </div>
            </div>
        </div>
    )
    
}
export default Joke