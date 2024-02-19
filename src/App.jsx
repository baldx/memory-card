import './App.css'
import Header from './components/header'
import Card from './components/card'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  let newData;

  const cardsData = [
    { id: 1, clicks: 0, search: "barry allen", name: "Flash" },
    { id: 2, clicks: 0, search: "iris west", name: "Iris West" },
    { id: 3, clicks: 0, search: "killer frost", name: "Caitlin Snow" },
    { id: 4, clicks: 0, search: "Joe West", name: "Joe West" },
    { id: 5, clicks: 0, search: "oliver queen", name: "Green Arrow" },
    { id: 6, clicks: 0, search: "cisco ramon", name: "Vibe" },
    { id: 7, clicks: 0, search: "Wentworth Miller", name: "Captain Cold" },
    { id: 8, clicks: 0, search: "batman", name: "Batman" },
    { id: 9, clicks: 0, search: "super girl", name: "Super Girl" },
    { id: 10, clicks: 0, search: "dc legends of tomorrow", name: "Legends" }
  ]


  /* 
    
      IF CARD HAS MORE THAT 1 CLICK
        shuffle
        and
        reset all clicks
  */
  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  const increaseScore = () => {

    setScore(prevScore => {
      if (prevScore >= bestScore) {
        setBestScore(prevScore + 1);
      }
      newData = shuffle(cardsData)
      return prevScore + 1;
    })


  }

  newData = shuffle(cardsData)

  return (
    <>
      <Header score={score} best={bestScore} />
      <main>
      {newData.map((card, index) => (
          <Card key={index} search={card.search} name={card.name} onClick={increaseScore}/>
        ))}
      </main>
    </>
  )
}

export default App
