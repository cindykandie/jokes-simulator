import '../App.css'
import Joke from './Joke'
import JokesAPI from '../Data/JokesAPI'

function JokeContainer(){
    const jokeElements = JokesAPI.map((joke)=>{
        return <Joke 
        setup = {joke.setup}
        punchline = {joke.punchline}/>
        }
      )
    return(
    <section className="main-container">
        {jokeElements}
        
    </section>
    )
    
}
export default JokeContainer