import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
import React from 'react'

function App() {

  return (
    <UserContextProvider >
     <h1>React With Chai{}</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
