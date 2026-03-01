import { useState } from 'react'
import './App.css'
import FarmSenseDashboard from './FarmSenseDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FarmSenseDashboard />
    </>
  )
}

export default App
