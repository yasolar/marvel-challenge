import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HerosContext } from '../../store/contexts'
import { FaAngleLeft } from "react-icons/fa6"
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
                <BackButton onClick={() => toHome()}>
                    <FaAngleLeft />
                    Voltar
                </BackButton>
                
                <TitleContainer>
                    Veja os resultados da sua pesquisa sobre "{name}"
                </TitleContainer>
            </Header>
            
            <CardHero 
                infos={infos}
                isLoading={isLoading}
                titleDetails={'Ver detalhes'}
                route={'/HeroDetails'}
            />
        </>
    )
}