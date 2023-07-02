import styled from "styled-components";

export const HerosContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeroContainer = styled.div`
    background-color: #fff;
    margin-inline: 40px;
    margin-bottom: 20px;
    border: 1px solid grey;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

export const InfosContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-inline: 20px;
`;

export const HeroImg = styled.img`
    background-color: lightgray;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
`;

export const NameContainer = styled.div`
    font-size: 20px;
    text-align: center;
`;

export const DescContainer = styled.div`
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const DetailsContainer = styled.div`
    border-top: 1px solid gray;
    width: 100%;

    div {
        cursor: pointer;
        font-size: 15px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        transition: color 0.3s ease;
    }

    div:hover {
        color: rgba(236, 29, 36, 0.8);
    }
`;