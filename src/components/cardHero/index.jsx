import React from 'react'
import ProfileSpider from '../../assets/ProfileSpider.png'
import { useNavigate } from 'react-router-dom'
import {
    HerosContainer,
    InfosContainer,
    HeroContainer,
    HeroImg,
    HeroDiv,
    NameContainer,
    DetailsContainer,
} from './style'

export default function CardHero({ infos, titleDetails, route }) {
    const navigate = useNavigate()

    const toRoute = (thumb, name, desc, urls, route) => {
        let img = ''
        let url = ''
        
        if (thumb && !thumb.path.includes('image_not_available')) {
            img = `${thumb.path}.${thumb.extension}`
        } else {
            img = ProfileSpider
        }

        if (urls) {
            urls.forEach((item) => {
                switch (item.type) {
                    case "detail":
                        url = item.url
                        break;
                    case "comiclink":
                        url = item.url
                        break;
                    case "wiki":
                        url = item.url
                        break;
                    default:
                        url = `https://www.google.com/search?q=${name}+marvel`
                        break;
                }
            });
        } else {
            url = `https://www.google.com/search?q=${name}+marvel`
        }

        navigate(`${route}`, { state: { img, name, desc, url } })
    }

    return (
        <HerosContainer>
            {infos ?
                infos.map(info =>
                    <HeroContainer key={info.id ? info.id : info.name}>
                        <InfosContainer>
                            <HeroImg src={info.thumbnail && !info.thumbnail.path.includes('image_not_available') ? `${info.thumbnail.path}.${info.thumbnail.extension}` : ProfileSpider} alt={''} />
                            <NameContainer>
                                {info.name ? info.name : "-"}
                            </NameContainer>
                        </InfosContainer>
                        <DetailsContainer onClick={() => toRoute(info.thumbnail, info.name, info.description ? info.description : '', info.urls, route)}>
                            <div>
                                {titleDetails}
                            </div>
                        </DetailsContainer>
                    </HeroContainer>
                )
                :
                <>
                    <HeroContainer>
                        <InfosContainer>
                            <HeroDiv />
                            <NameContainer>
                                -
                            </NameContainer>
                        </InfosContainer>
                        <DetailsContainer>
                            <div>
                                {titleDetails}
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
                                {titleDetails}
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
                                {titleDetails}
                            </div>
                        </DetailsContainer>
                    </HeroContainer>
                </>
            }
        </HerosContainer>
    )
}