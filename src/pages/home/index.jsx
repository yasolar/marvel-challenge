import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetHeros } from '../../services/api'
import { HerosContext } from '../../store/contexts'
import Avengers from '../../assets/Avengers.png'
import Spider from '../../assets/Spiderverse.png'
import Panther from '../../assets/Panther.png'
import Xmen from '../../assets/Xmen.png'
import Fantastic from '../../assets/FantasticFour.png'
import {
    MainContainer,
    SideAContainer,
    TextContainer,
    CircleSpan,
    WelcomeText,
    SearchContainer,
    SearchInput,
    SearchBtn,
    SideBContainer,
    FirstImage,
    SecondImage,
    ThirdImage,
    FourthImage,
    FifthImage,
} from './style.js'



export default function Home() {
    const {setIsLoading} = useContext(HerosContext)
    const {name, setName} = useContext(HerosContext)
    const {setInfos} = useContext(HerosContext)
    const navigate = useNavigate()
    
    const toHeroList = () => {
        GetHeros(name, setInfos, setIsLoading)
        navigate('/HeroList')
    }

    return (
        <MainContainer>
            <SideAContainer>
                <TextContainer>
                    <CircleSpan position="left" translateX="50%" translateY="-80%" size={150} />
                    <CircleSpan position="left" translateX="80%" translateY="-100%" size={190} />
                    <CircleSpan position="right" translateX="-60%" translateY="-150%" size={150} />
                    <WelcomeText>
                        Conheça um pouco mais dos personagens da Marvel e encontre informações sobre cada herói e vilão
                    </WelcomeText>
                </TextContainer>

                <SearchContainer>
                    <SearchInput value={name} onChange={e => setName(e.target.value)} placeholder='Digite o nome do(a) personagem' />
                    <SearchBtn onClick={() => toHeroList()}>
                        Buscar
                    </SearchBtn>
                </SearchContainer>
            </SideAContainer>
            
            <SideBContainer>
                <FirstImage src={Avengers} alt="Avengers" />
                <SecondImage src={Spider} alt="Spider" />
                <ThirdImage src={Panther} alt="Panther" />
                <FourthImage src={Xmen} alt="Xmen" />
                <FifthImage src={Fantastic} alt="Fantastic" />
            </SideBContainer>
        </MainContainer>
    )
}





