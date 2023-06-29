import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


export default function HeroDetails() {
    const navigate = useNavigate()
    const location = useLocation();

    const toHeroList = () => {
        navigate('/HeroList')
    }

    return (
        <>
            <div>HERO DETAILS</div>
            <button onClick={() => toHeroList()}>VOLTAR</button>

            <div style={{border: 'solid', borderRadius: '5px', borderWidth: '1px', borderColor:'grey', marginTop: '10px', height: '300px', width: '90%', padding: '15px'}}>
                <img style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: 200, height: 200 }} src={location.state.img ? location.state.img : ''} alt="" />
                <div>{location.state.name}</div>
                <div>{location.state.desc}</div>
            </div>

        </>
    )
}