import './App.css'
import Header from './maincomponent/headersection/Header'
import MainBody from './maincomponent/body/body'
import Samples from './maincomponent/samplesection/Samples'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <MainBody />
      </div>
      <div>
        <Samples />
      </div>
    </div>
  )
}

export default App
