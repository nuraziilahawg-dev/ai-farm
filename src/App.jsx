import { useState } from 'react'
import './App.css'
import FarmSenseApp from './FarmSenseApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FarmSenseApp />
    </>
  )
}

export default App
