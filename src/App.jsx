import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://rogeriocordeiro.github.io/" className="logo"><button>Voltar</button></a>
      </div>
      <h1>Seja bem vindo(a) a minha página</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clique para contar! {count}
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
