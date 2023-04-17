import Header from './Header'
import './custom-styles/JokeInput.css'
function JokeInput(){
    function handleAddJoke(){
        console.log('I was cicked')
    }
    return(
    <div>
        <div className="addjoke-container">
        <h1>Submit Joke</h1>
        <h2>Share the joy</h2>
            <div className='input-field'>
                <input type="text" name="" id="" placeholder="Add SetUp here.."/>
                <input type="text" name="" id="" placeholder="Add PunchLine here.."/>
            </div>
            <button onClick={handleAddJoke}>Add Joke</button>
    </div>
    </div>
    
    )
}
export default JokeInput