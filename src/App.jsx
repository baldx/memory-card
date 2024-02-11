import './App.css'
import Header from './components/header'
import OnLoad from './components/card'

function App() {

  return (
    <>
      <Header score={0} best={0} />
      <main>
        <OnLoad />
      </main>
    </>
  )
}

export default App
