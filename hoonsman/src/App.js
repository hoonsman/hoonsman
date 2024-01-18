import './App.css'
import Header from './maincomponent/headersection/Header'
import MainBody from './maincomponent/body/body'
import SeminarSample from './maincomponent/samples/Seminar/seminarsample'

function App() {
  return (
    <div className="App">
      <SeminarSample size={{ width: '1020px', height: '800px' }} />
    </div>
  )
}

export default App
