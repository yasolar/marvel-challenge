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
    DetailsLink,
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
                <BackButton icon={''} text={'Voltar'} onClick={() => toHeroList()} />

                <BackButton secondary icon={''} text={'Home'} onClick={() => toHome()} />
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
                    <DetailsContainer>
                        {location.state.links.map(link => 
                            <DetailsLink key={link.type} onClick={() => openNewTab(link.url)}>
                                {link.text}
                            </DetailsLink>
                        )}
                    </DetailsContainer>
                </HeroContainer>
            </HerosContainer>
        </>
    )
}