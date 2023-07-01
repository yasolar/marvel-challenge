import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HerosContext } from '../../store/contexts'
import ProfileSpider from '../../assets/ProfileSpider.png'
import {
    HeaderContainer,
    BackButton,
    BackIcon,
    TitleContainer,
    HerosContainer,
    InfosContainer,
    HeroContainer,
    HeroImg,
    NameContainer,
    DetailsContainer,
    HeroDiv,
} from './style'

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

    const toHeroDetails = (thumb, name, desc) => {
        let img = ''
        if (thumb && !thumb.path.includes('image_not_available')) {
            img = `${thumb.path}.${thumb.extension}`
        } else {
            img = ProfileSpider
        }
        navigate('/HeroDetails', { state: { img, name, desc } })
    }

    return (
        <>
            <HeaderContainer>
                <BackButton onClick={() => toHome()}>
                    <BackIcon>&lt;</BackIcon>
                    Voltar
                </BackButton>
                <TitleContainer>
                    Veja os resultados da sua pesquisa sobre "{name}"
                </TitleContainer>
            </HeaderContainer>
            {isLoading ?
                <HerosContainer>
                    <HeroContainer>
                        <InfosContainer>
                            <HeroDiv />
                            <NameContainer>
                                -
                            </NameContainer>
                        </InfosContainer>
                        <DetailsContainer>
                            <div>
                                Ver detalhes
                            </div>
                        </DetailsContainer>
                    </HeroContainer>

                    <HeroContainer>
                        <InfosContainer>
                            <HeroDiv />
                            <NameContainer>
                                -
                            </NameContainer>
                        </InfosContainer>
                        <DetailsContainer>
                            <div>
                                Ver detalhes
                            </div>
                        </DetailsContainer>
                    </HeroContainer>

                    <HeroContainer>
                        <InfosContainer>
                            <HeroDiv />
                            <NameContainer>
                                -
                            </NameContainer>
                        </InfosContainer>
                        <DetailsContainer>
                            <div>
                                Ver detalhes
                            </div>
                        </DetailsContainer>
                    </HeroContainer>
                </HerosContainer>
                :
                <HerosContainer>
                    {infos.map(info =>
                        <HeroContainer key={info.id}>
                            <InfosContainer>
                                <HeroImg src={info.thumbnail && !info.thumbnail.path.includes('image_not_available') ? `${info.thumbnail.path}.${info.thumbnail.extension}` : ProfileSpider} alt="" />
                                <NameContainer>
                                    {info.name ? info.name : "-"}
                                </NameContainer>
                            </InfosContainer>
                            <DetailsContainer onClick={() => toHeroDetails(info.thumbnail, info.name, info.description)}>
                                <div>
                                    Ver detalhes
                                </div>
                            </DetailsContainer>
                        </HeroContainer>
                    )}
                </HerosContainer>
            }
        </>
    )
}