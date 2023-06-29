import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetHeros } from '../../services/api'
import { HerosContext } from '../../store/contexts'
import Avengers from '../../assets/Avengers.png'
import Spider from '../../assets/Spiderverse.png'
import Panther from '../../assets/Panther.png'
import Xmen from '../../assets/Xmen.png'
import Fantastic from '../../assets/FantasticFour.png'
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
                    <div style={{position: 'relative', display:  'inline-block', marginBottom: '30px'}}>
                        <span style={{position: 'absolute', top: '75%', left: '-50px', transform: 'translate(50%, -80%)', width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'rgba(233, 230, 29,0.4)'}}></span>
                        <span style={{position: 'absolute', top: '75%', left: '-50px', transform: 'translate(80%, -100%)', width: '190px', height: '190px', borderRadius: '50%', backgroundColor: 'rgba(233, 230, 29,0.4)'}}></span>
                        <div style={{position: 'relative', zIndex: '1', fontWeight: 'bold', width: '410px', fontSize: '20px', marginBottom: '100px'}}>Conheça um pouco mais dos personagens da Marvel e encontre informações sobre cada herói e vilão</div>
                        <span style={{position: 'absolute', top: '75%', right: '-50px', transform: 'translate(-60%, -150%)', width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'rgba(233, 230, 29,0.4)'}}></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px',borderWidth: '0.1px', height: '45px', width: '300px', fontSize: '14px', paddingTop: '0px', paddingBottom: '0px', paddingLeft: '20px', paddingRight: '10px'}}
                        />
                        <button onClick={() => toHeroList()} style={{cursor: 'pointer', height: '100%', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderWidth: '0.1px', width:'100px', backgroundColor: 'rgba(236, 29, 36, 0.8)', color: '#fff', fontWeight: 'bold', borderColor: 'rgba(236, 29, 36, 0.8)'}}>
                            BUSCAR
                        </button>
                    </div>
                </div>
                
                <div className="imgs" style={{flexGrow: 3, backgroundColor: 'rgba(236, 29, 36, 0.8)', width: '600px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <img src={Avengers} alt="Avengers" />
                    <img src={Spider} alt="Spider" />
                    <img src={Panther} alt="Panther" />
                    <img src={Xmen} alt="Xmen" />
                    <img src={Fantastic} alt="Fantastic" />
                </div>
            </div>
        </div>
    )
}





