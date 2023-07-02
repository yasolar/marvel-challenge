import React, {useContext} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HerosContext } from '../../store/contexts'
import BackButton from '../../components/backButton'
import Header from '../../components/header'
import {
    HerosContainer,
    InfosContainer,
    HeroContainer,
    HeroImg,
    NameContainer,
    DescContainer,
    DetailsContainer,
} from './style'


export default function HeroDetails() {
    const { setIsLoading } = useContext(HerosContext)
    const { setInfos } = useContext(HerosContext)
    const { setName } = useContext(HerosContext)
    const navigate = useNavigate()
    const location = useLocation()

    const toHeroList = () => {
        navigate('/HeroList')
    }

    const toHome = () => {
        setName('')
        setIsLoading(true)
        setInfos([])
        navigate('/')
    }

    const openNewTab = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>  <Header>
                <BackButton onClick={() => toHeroList()}>
                    VOLTAR
                </BackButton>

                <BackButton secondary onClick={() => toHome()}>
                    HOME
                </BackButton>
            </Header>

            <HerosContainer>
                <HeroContainer>
                    <InfosContainer>
                        <HeroImg src={location.state.img} alt={''} />
                        <NameContainer>
                            {location.state.name}
                        </NameContainer>
                        <DescContainer>{location.state.desc}</DescContainer>
                    </InfosContainer>
                    <DetailsContainer onClick={() => openNewTab(location.state.url)}>
                        <div>
                            Acesse outras informações
                        </div>
                    </DetailsContainer>
                </HeroContainer>
            </HerosContainer>
        </>
    )
}