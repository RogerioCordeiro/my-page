import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Seja bem vindo a minha página</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         Aguarde em breve vou trazer muitas novidades!
        </p>
      </div>
      <p className="read-the-docs">
        Página desenvolvida por Rogerio Cordeiro.
      </p>
    </>
  )
}

export default App
