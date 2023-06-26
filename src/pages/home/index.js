import '../../App.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GetHeros } from '../../services/api'
import { HerosContext } from '../../store/contexts'

export default function Home() {
    const {name, setName} = useContext(HerosContext)
    const {setInfos} = useContext(HerosContext)
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <input
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <button onClick={() => GetHeros(name, setInfos)}>
                        CARREGAR INFOS
                    </button>
                </div>
                <Link to="/HeroList">Ir para a lista</Link>
            </header>
        </div>
    )
}





