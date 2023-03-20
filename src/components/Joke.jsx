import NextButton from './NextButton'
import './Joke.css'
import {useState} from 'react'

function Joke(props){
    const [showDiv, setShowDiv] = useState(true);

    const handleJokeReveal=()=>{
        setShowDiv(!showDiv);
        console.log('cake')
    }
    return(
        <div className="setup-container">
            <h3>{props.setup}</h3>
            <div className="punchline-container">
            {showDiv && <div className="overlay">
                <p onClick={handleJokeReveal}>Click To Reveal
                </p> 
            </div>}
                <p> <i>"{props.punchline}"</i></p>
                <div className="reactions-container">
                    <span>😍😍</span>
                    <span>😘😘</span>
                    <span>😣😣</span>
                    <span>😫😫</span>
                </div>
            </div>
        </div>
    )
    
}
export default Joke