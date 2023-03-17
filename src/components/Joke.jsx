import NextButton from './NextButton'
import './Joke.css'
function Joke(props){
    return(
        <div className="setup-container">
            <h3>{props.setup}</h3>
            <div className="punchline-container">
            <div className="overlay">Click To Reveal</div>
                <p> <i>"{props.punchline}"</i></p>
                <div className="reactions-container">
                    <span>😍😍</span>
                    <span>😘😘</span>
                    <span>😣😣</span>
                    <span>😫😫</span>
                </div>
                <NextButton />
            </div>
        </div>
    )
    
}
export default Joke