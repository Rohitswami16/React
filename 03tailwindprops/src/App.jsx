import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-red-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" newobj={myObj} />
      {/* <Card username="hitesh" /> */}
      <Card username="Rohit" btnText='Github'/>
      <Card username="Kiran" btnText='linkedin' />
      <Card username="sunil" btnText='facebook' />
    </>
  )
}

export default App