import './App.css'
import Header from './components/header'
import Card from './components/card'

function App() {

  return (
    <>
      <Header score={0} best={0} />
      <main>
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
        <Card src={"src/assets/flashsuit.jpg"} name="Flash" />
      </main>
    </>
  )
}

export default App
