import styled from "styled-components";


export const HeaderContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 35px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
`;

export const BackButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 120px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background-color: rgba(236, 29, 36, 0.8);
  transition: background-color 0.3s ease;
`;

export const BackIcon = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

export const TitleContainer = styled.div`
  margin-left: 35px;
  font-size: 20px;
`;

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
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
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
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
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