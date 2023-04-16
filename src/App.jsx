import './App.css'
import Header from './components/Header'
import JokeContainer from './components/JokeContainer'
import Footer from './components/Footer'
import JokeInput from './components/JokeInput'


function App() {
  
  return (
    <div>
      <JokeInput />
      <Header />
      <JokeContainer />
      <Footer />
    </div>
  )
}

export default App
