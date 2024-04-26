import { useState } from 'react'
import './App.css'
import { useDocumentEffect } from './customHook/useDocumentEffect';

function App() {
  const [count, setCount] = useState(0);
  useDocumentEffect(`You clicked ${count} times.`);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
