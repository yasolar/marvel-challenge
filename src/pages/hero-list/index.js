import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HerosContext } from '../../store/contexts'

export default function HeroList() {
    const {infos, setInfos} = useContext(HerosContext)
    const {setName} = useContext(HerosContext)
    const navigate = useNavigate()

    const toHome = () => {
        setName('')
        setInfos([])
        navigate('/')
    }

    const toHeroDetails = (img, name, desc) => {
        navigate('/HeroDetails', {state: { img, name, desc }})
    }

    return (
        <>
            <div>HERO LIST</div>
            <button onClick={() => toHome()}>VOLTAR</button>

            {infos.map(info =>
                <div key={info.id} style={{border: 'solid', borderRadius: '5px', borderWidth: '1px', borderColor:'grey', display: 'flex', marginTop: '10px', alignItems: 'center', flexDirection: 'row', height: '150px', width: '90%', padding: '15px'}}>
                    <img style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: 120, height: 120, marginRight: '30px' }} src={info.thumbnail ? `${info.thumbnail.path}.${info.thumbnail.extension}` : ''} alt="" />
                    <div>
                        <p style={{fontSize: '15px'}}>
                            Hero: {info.name ? info.name : "-"}
                        </p>
                        <button onClick={() => toHeroDetails(`${info.thumbnail.path}.${info.thumbnail.extension}`, info.name, info.description)}>
                            Ver detalhes
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}