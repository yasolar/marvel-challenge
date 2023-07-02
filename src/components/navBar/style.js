import styled from 'styled-components';


export const NavBarContainer = styled.div`
  background-color: #202020;
  padding-left: 25px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(233, 230, 29);
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-inline: 25px;
  width: 90px;
  align-items: center;
  font-size: 20px;
  color: rgb(233, 230, 29);
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;