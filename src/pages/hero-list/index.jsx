import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HerosContext } from '../../store/contexts'
import BackButton from '../../components/backButton'
import Header from '../../components/header'
import CardHero from '../../components/cardHero'
import { TitleContainer } from './style'

export default function HeroList() {
    const { isLoading, setIsLoading } = useContext(HerosContext)
    const { infos, setInfos } = useContext(HerosContext)
    const { name, setName } = useContext(HerosContext)
    const navigate = useNavigate()

    const toHome = () => {
        setName('')
        setIsLoading(true)
        setInfos([])
        navigate('/')
    }

    return (
        <>
            <Header>
                <BackButton icon={''} text={'Voltar'} onClick={toHome} />
                
                <TitleContainer>
                    Veja os resultados da sua pesquisa sobre "{name}"
                </TitleContainer>
            </Header>
            {isLoading ?
                <CardHero 
                    infos={false}
                    titleDetails={'Ver detalhes'}
                    route={'/HeroDetails'}
                />
                :
                <CardHero 
                    infos={infos}
                    titleDetails={'Ver detalhes'}
                    route={'/HeroDetails'}
                />
            }
        </>
    )
}