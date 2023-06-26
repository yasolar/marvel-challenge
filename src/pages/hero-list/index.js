import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HerosContext } from '../../store/contexts'

export default function HeroList() {
    const {infos} = useContext(HerosContext)
    return (
        <>
            <div>HERO LIST</div>
            <Link to="/">VOLTAR</Link>

            {infos.map(info =>
                <div key={info.id} style={{border: 'solid', borderRadius: '5px', borderWidth: '1px', borderColor:'grey', display: 'flex', marginTop: '10px', alignItems: 'center', flexDirection: 'row', height: '300px', width: '90%', padding: '15px'}}>
                    <img style={{ backgroundColor: 'lightgray', borderRadius: '100%', width: 200, height: 200, marginRight: '30px' }} src={info.thumbnail ? `${info.thumbnail.path}.${info.thumbnail.extension}` : ''} alt="" />
                    <div>
                        <p style={{fontSize: '15px'}}>
                            Hero: {info.name ? info.name : "-"}
                        </p>
                        <p style={{fontSize: '15px'}}>
                            {info.description ? info.description : "-"}
                        </p>
                        <Link to="/HeroDetails">Ver detalhes</Link>
                    </div>
                </div>
            )}
        </>
    )
}