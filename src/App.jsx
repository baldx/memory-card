import './App.css'
import Header from './components/header'
import Card from './components/card'

function App() {

  /*write random gen function here*/

  return (
    <>
      <Header score={0} best={0} />
      <main>
        <Card search="barry allen" name="Flash" />
        <Card search="iris west" name="Iris West" />
        <Card search="killer frost" name="Caitlin Snow" />
        <Card search="Joe West" name="Joe West" />
        <Card search="oliver queen" name="Green Arrow" />
        <Card search="cisco ramon" name="Vibe" />
        <Card search="Wentworth Miller" name="Captain Cold" />
        <Card search="batman" name="Batman" />
        <Card search="super girl" name="Super Girl" />
        <Card search="dc legends of tomorrow" name="Legends" />
      </main>
    </>
  )
}

export default App
