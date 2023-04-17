import Notes from '../Data/HeaderNotes'
import './custom-styles/Header.css'
function Header(){
    let noteNumber = Math.floor(Math.random()* 10)
    let image = `/assets/faceshots/img${noteNumber}.jpg`
    const NoteHeadings = 
        <header>
            <h1>Welcome to the Jokes Simulator!</h1>
            <div>
                <img src={image}/>
            </div>
            <div className="copywrite">
                <h1>{Notes[noteNumber].note}</h1>
                <p>{Notes[noteNumber].subtitle}</p>
            </div>
        </header>

    return(
    <div>
        <h1>{NoteHeadings}</h1>
    </div>
    )
}
export default Header