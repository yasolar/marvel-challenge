import styled from "styled-components";

export const HerosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const HeroContainer = styled.div`
    background-color: #fff;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 160px;
    width: 200px;
`;

export const InfosContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-inline: 10px;
`;

export const HeroImg = styled.img`
    background-color: lightgray;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
`;

export const HeroDiv = styled.div`
    background-color: lightgray;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
`;

export const NameContainer = styled.div`
    font-size: 13px;
    font-weight: bold;
    text-align: center;
`;

export const DetailsContainer = styled.div`
    border-top: 1px solid gray;
    width: 100%;

    div {
        cursor: pointer;
        font-size: 13px;
        text-align: center;
        margin-top: 6px;
        margin-bottom: 6px;
        transition: color 0.3s ease;
    }

    div:hover {
        color: rgba(236, 29, 36, 0.8);
    }
`;