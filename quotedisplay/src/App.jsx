import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Randomquote from './components/Randomquote/Randomquote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Randomquote />
       </div>
    </>
  )
}

export default App
