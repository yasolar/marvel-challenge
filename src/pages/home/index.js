import '../../App.css'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetHeros } from '../../services/api'
import { HerosContext } from '../../store/contexts'

export default function Home() {
    const {name, setName} = useContext(HerosContext)
    const {setInfos} = useContext(HerosContext)
    const navigate = useNavigate()
    const toHeroList = () => {
        GetHeros(name, setInfos)
        navigate('/HeroList')
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <input
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <button onClick={() => toHeroList()}>
                        CARREGAR INFOS
                    </button>
                </div>
            </header>
        </div>
    )
}





