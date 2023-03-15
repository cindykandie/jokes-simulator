import './App.css'
import Joke from './components/Joke'
import JokesAPI from './Data/JokesAPI'

function App() {
  const jokeElements = JokesAPI.map((joke)=>{
    return <Joke 
    setup = {joke.setup}
    punchline = {joke.punchline}/>
    }
  )
  return (
    <div>
      <h1>Its Just a Joke</h1>
      {jokeElements}
    </div>
  )
}

export default App
