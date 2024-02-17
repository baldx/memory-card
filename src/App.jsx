import './App.css'
import Header from './components/header'
import Card from './components/card'

function App() {

  const cardsData = [
    { search: "barry allen", name: "Flash" },
    { search: "iris west", name: "Iris West" },
    { search: "killer frost", name: "Caitlin Snow" },
    { search: "Joe West", name: "Joe West" },
    { search: "oliver queen", name: "Green Arrow" },
    { search: "cisco ramon", name: "Vibe" },
    { search: "Wentworth Miller", name: "Captain Cold" },
    { search: "batman", name: "Batman" },
    { search: "super girl", name: "Super Girl" },
    { search: "dc legends of tomorrow", name: "Legends" }
  ]

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  const newData = shuffle(cardsData);

  return (
    <>
      <Header score={0} best={0} />
      <main>
      {newData.map((card, index) => (
          <Card key={index} search={card.search} name={card.name} />
        ))}
      </main>
    </>
  )
}

export default App
