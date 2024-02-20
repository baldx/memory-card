import './App.css'
import Header from './components/header'
import Card from './components/card'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); //state hooks for score
  let newData;

  const initialCardsData = [ //data for all cards
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

  const [cardsData, setCardsData] = useState(initialCardsData); //useState for card data


  const shuffle = array => { //shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  const increaseScore = (id) => { //id as parameter to locate which card is to which information
    setScore(prevScore => {
      if (prevScore >= bestScore) {
        setBestScore(prevScore + 1);
      } // checks if score is bigger or equal to the best score and sets the best score to the current score
      newData = shuffle(cardsData) //shuffle cards after each click
      return prevScore + 1; // return the increment of score
    })

    setCardsData(prevCardsData => {
      return prevCardsData.map(card => { //goes over every object in the array. for every object it goes over it does something with it.
        if (card.id === id) { //if cards id is equal the cards id parameter
          let updatedClicks = card.clicks++; // let clicks increment of said id

          if (updatedClicks > 1) { //if cards clicks reaches more than one
            setScore(0); //set score to 0
            return {...card, clicks: 0}; //return the whole cards information and reset the clicks.
          }

          return {...card, clicks: updatedClicks }; //return the cards and update the clicks to the said updated clicks
        }
        return card; //return card
        // return card.id === id ? {...card, clicks: card.clicks++} : card
      })
    })
  }

  newData = shuffle(cardsData)

  return (
    <>
      <Header score={score} best={bestScore} />
      <main>
      {newData.map((card, index) => ( //function to iterate through every object to display its information
          <Card key={index} search={card.search} name={card.name} onClick={() => increaseScore(card.id)}/>
        ))}
      </main>
    </>
  )
}

export default App
