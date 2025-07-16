import React from 'react'
import Home from './pages/Home'
import Chat from './pages/Chat'
import UserContext from './context/UserContext'

const App = () => {
  return (
    <>
    <Home/>
    <Chat/>
    <UserContext/>
    </>
  )
}

export default App