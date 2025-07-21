import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  // You can remove this if it's empty or redundant

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center gap-8 my-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-24 w-24" alt="React logo" />
        </a>
      </div>

      <h1 className="text-red-500 text-4xl font-bold text-center mb-8">Vite + React</h1>

      <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md mb-4 transition"
        >
          count is {count}
        </button>
  
      </div>

      <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
