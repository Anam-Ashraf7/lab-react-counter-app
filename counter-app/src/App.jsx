import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function IncreaseCount() {
    setCount((count) => count + 1)
  }

  function DecreaseCount() {
    setCount((count) =>  count - 1)
  }

  function Reset() {
    setCount(count = 0)
  }

  return (
    <>
      
      <h1 id='title'>Counter App</h1>
      <div className="card">
        <h1 id='count'>{count}</h1>
        <div>
        <button className='btn' onClick={IncreaseCount}>
          + 1
        </button>
        <button className='btn' onClick={DecreaseCount}>
          - 1
        </button>
        <button className='btn' onClick={Reset}>
          Reset
        </button>
        </div>
      </div>
    </>
  )
}

export default App
