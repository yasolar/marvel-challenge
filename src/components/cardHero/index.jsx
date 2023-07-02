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

    const sortByDescription = (a, b) => {
        a.description = a.description.replace(' ', '')
        b.description = b.description.replace(' ', '')
        if (a.description && !b.description) {
          return -1;
        } else if (!a.description && b.description) {
          return 1;
        } else {
          return 0;
        }
      };

    const toRoute = (thumb, name, desc, urls, route) => {
        let img = ''
        let links = []
        
        if (thumb && !thumb.path.includes('image_not_available')) {
            img = `${thumb.path}.${thumb.extension}`
        } else {
            img = ProfileSpider
        }

        if (urls) {
            urls.forEach((item) => {
                if (item.type === 'comiclink') {
                    links.push({
                        type: 'comiclink',
                        text: 'Acesse os quadrinhos',
                        url: item.url
                    })
                } else if (item.type === 'detail') {
                    links.push({
                        type: 'detail',
                        text: 'Acesse mais detalhes',
                        url: item.url
                    })
                } else if (item.type === 'wiki') {
                    links.push({
                        type: 'wiki',
                        text: 'Acesse a Wiki',
                        url: item.url
                    })
                }
            })
        } else {
            links.push({
                type: 'other',
                text: 'Acesse outras informações',
                url: `https://www.google.com/search?q=${name}+marvel`
            })
        }

        navigate(`${route}`, { state: { img, name, desc, links } })
    }

    return (
        <HerosContainer>
            {infos ?
                infos.sort(sortByDescription).map(info =>
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