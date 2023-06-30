import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HerosContext } from '../../store/contexts'
import ProfileSpider  from '../../assets/ProfileSpider.png'

export default function HeroList() {
    const {isLoading, setIsLoading} = useContext(HerosContext)
    const {infos, setInfos} = useContext(HerosContext)
    const {setName} = useContext(HerosContext)
    const navigate = useNavigate()

    const toHome = () => {
        setName('')
        setIsLoading(true)
        setInfos([])
        navigate('/')
    }

    const toHeroDetails = (thumb, name, desc) => {
        let img = ''
        if (thumb && !thumb.path.includes('image_not_available')) {
            img = `${thumb.path}.${thumb.extension}`
        } else {
            img = ProfileSpider
        }
        navigate('/HeroDetails', {state: { img, name, desc }})
    }

    return (
        <div style={{marginInline: '20px'}}>
            <button onClick={() => toHome()}>VOLTAR</button>
            {isLoading ?
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div style={{cursor: 'pointer', position: 'relative', marginLeft: '40px',marginBottom: '30px', border: 'solid', borderRadius: '5px', borderWidth: '2px', borderColor:'grey', display: 'flex', alignItems: 'center', flexDirection: 'row', height: '120px', width: '250px', paddingLeft: '20px'}}>
                        <div style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: '80px', height: '80px', marginRight: '30px' }} />
                        <div style={{ flex: 1 }}>
                            <p style={{fontSize: '15px', marginRight: '20px'}}>
                                -
                            </p>
                            <button style={{cursor: 'pointer', borderRadius: '50%', width: '35px',height:'35px', position: 'absolute', top: '50%', right: '-18px', transform: 'translateY(-50%)'}}>
                                +
                            </button>
                        </div>
                    </div>

                    <div style={{cursor: 'pointer', position: 'relative', marginLeft: '40px',marginBottom: '30px', border: 'solid', borderRadius: '5px', borderWidth: '2px', borderColor:'grey', display: 'flex', alignItems: 'center', flexDirection: 'row', height: '120px', width: '250px', paddingLeft: '20px'}}>
                        <div style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: '80px', height: '80px', marginRight: '30px' }} />
                        <div style={{ flex: 1 }}>
                            <p style={{fontSize: '15px', marginRight: '20px'}}>
                                -
                            </p>
                            <button style={{cursor: 'pointer', borderRadius: '50%', width: '35px',height:'35px', position: 'absolute', top: '50%', right: '-18px', transform: 'translateY(-50%)'}}>
                                +
                            </button>
                        </div>
                    </div>

                    <div style={{cursor: 'pointer', position: 'relative', marginLeft: '40px',marginBottom: '30px', border: 'solid', borderRadius: '5px', borderWidth: '2px', borderColor:'grey', display: 'flex', alignItems: 'center', flexDirection: 'row', height: '120px', width: '250px', paddingLeft: '20px'}}>
                        <div style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: '80px', height: '80px', marginRight: '30px' }} />
                        <div style={{ flex: 1 }}>
                            <p style={{fontSize: '15px', marginRight: '20px'}}>
                                -
                            </p>
                            <button style={{cursor: 'pointer', borderRadius: '50%', width: '35px',height:'35px', position: 'absolute', top: '50%', right: '-18px', transform: 'translateY(-50%)'}}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            :
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {infos.map(info =>
                        <div key={info.id} onClick={() => toHeroDetails(info.thumbnail, info.name, info.description)} style={{cursor: 'pointer', position: 'relative', marginLeft: '40px',marginBottom: '30px', border: 'solid', borderRadius: '5px', borderWidth: '2px', borderColor:'grey', display: 'flex', alignItems: 'center', flexDirection: 'row', height: '120px', width: '250px', paddingLeft: '20px'}}>
                            <img style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: '80px', height: '80px', marginRight: '30px' }} src={info.thumbnail && !info.thumbnail.path.includes('image_not_available') ? `${info.thumbnail.path}.${info.thumbnail.extension}` : ProfileSpider} alt="" />
                            <div style={{ flex: 1 }}>
                                <p style={{fontSize: '15px', marginRight: '20px'}}>
                                    {info.name ? info.name : "-"}
                                </p>
                                <button style={{cursor: 'pointer', borderRadius: '50%', width: '35px',height:'35px', position: 'absolute', top: '50%', right: '-18px', transform: 'translateY(-50%)'}} onClick={() => toHeroDetails(info.thumbnail, info.name, info.description)}>
                                    +
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}