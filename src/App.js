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
        <div>
          <input 
            name="nameHero" 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
          <button onClick={() => testandoAPI(name, setImg, setName, setDesc)}>
            CARREGAR INFOS
          </button>
        </div>

        <div style={{border: 'solid', borderRadius: '5px', borderWidth: '1px', borderColor:'grey', display: 'flex', marginTop: '10px', alignItems: 'center', flexDirection: 'row', height: '300px', width: '90%', padding: '15px'}}>
          {img ? 
              <img style={{ borderRadius: '100%', width: 200, height: 200, marginRight: '30px' }} src={img} alt="hero" />
            : 
              <div style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: 200, height: 200, marginRight: '30px' }} />
          }
          <div>
            <p style={{fontSize: '15px'}}>
              Hero: {name ? name : "-"}
            </p>
            <p style={{fontSize: '15px'}}>
              {desc ? desc : "-"}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App
