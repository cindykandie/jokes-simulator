import NextButton from './NextButton'
import './Joke.css'
function Joke(props){
    const handleJokeReveal=()=>{
        console.log('cake')
    }
    return(
        <div className="setup-container">
            <h3>{props.setup}</h3>
            <div className="punchline-container">
            <div className="overlay"><p onClick={handleJokeReveal}>Click To Reveal</p> </div>
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