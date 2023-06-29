import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetHeros } from '../../services/api'
import { HerosContext } from '../../store/contexts'
import Avengers from '../../assets/The_Avengers.png'
import Spider from '../../assets/spiderverse.png'
import Panther from '../../assets/panther.png'
import Xmen from '../../assets/xmen.png'
import Quarteto from '../../assets/QuartetoFantastico.png'
import './style.css'

export default function Home() {
    const {name, setName} = useContext(HerosContext)
    const {setInfos} = useContext(HerosContext)
    const navigate = useNavigate()
    const toHeroList = () => {
        GetHeros(name, setInfos)
        navigate('/HeroList')
    }

    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap', height: '100vh', justifyContent: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', paddingInline: '80px'}}>
                    <div style={{width: '410px', fontSize: '20px'}}>Conheça um pouco mais dos personagens da Marvel e encontre informações sobre cada herói e vilão</div>
                    <div>
                        <input
                            value={name} 
                            onChange={e => setName(e.target.value)}
                        />
                        <button onClick={() => toHeroList()}>
                            CARREGAR INFOS
                        </button>
                    </div>
                </div>
                
                <div className="imgs" style={{flexGrow: 3, backgroundColor: 'rgba(236, 29, 36, 0.8)', width: '600px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <img src={Avengers} alt="" />
                    <img src={Spider} alt="" />
                    <img src={Panther} alt="" />
                    <img src={Xmen} alt="" />
                    <img src={Quarteto} alt="" />
                </div>
            </div>
        </div>
    )
}





