import './App.css'
import { useState } from 'react'
import {testandoAPI} from './api'

function App() {
  const [img, setImg] = useState()
  const [name, setName] = useState()
  const [desc, setDesc] = useState()
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Nome do herói: {name ? name : "-"}
        </p>
        {img ? 
            <img style={{ borderRadius: '100%', width: 300, height: 300, marginBottom: 10 }} src={img} alt="hero" />
          : 
            "Sem imagem por enquanto"
        }
        <p>
          Descrição: {desc ? desc : "-"}
        </p>
        <button onClick={() => testandoAPI(setImg, setName, setDesc)}>
          CARREGAR INFOS
        </button>
      </header>
    </div>
  );
}

export default App
