import styled, { keyframes } from "styled-components";

const FadeAnimation = keyframes`
	0% {
	opacity: 0;
	}
	25% {
	opacity: 1;
	}
	35% {
	opacity: 0;
	}
	100% {
	opacity: 0;
	}
`;

const HerosImg = styled.img`
	width: 600px;
	height: 574px;
	opacity: 0;
	position: absolute;
	animation: ${FadeAnimation} 11s infinite;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: 100vh;
`;

export const SideAContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding-inline: 80px;
`;

export const TextContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 30px;
`;

export const CircleSpan = styled.span`
	top: 75%;
	border-radius: 50%;
	background-color: rgba(233, 230, 29,0.4);
	position: absolute;
	${({ position }) => position}: -50px;
	width: ${({ size }) => `${size}px`};
	height: ${({ size }) => `${size}px`};
	transform: ${({ translateX, translateY }) => `translate(${translateX}, ${translateY})`};
`;

export const WelcomeText = styled.div`
	position: relative;
	z-index: 1;
	font-weight: bold;
	width: 410px;
	font-size: 20px;
	margin-bottom: 100px;
`;

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const SearchInput = styled.input`
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	border-width: 0.1px; 
	height: 45px;
	width: 300px; 
	font-size: 14px; 
	padding-top: 0px; 
	padding-bottom: 0px; 
	padding-left: 20px; 
	padding-right: 10px;
`;

export const SearchButton = styled.button`
	cursor: pointer;
	height: 100%;
	width:100px; 
	color: #fff;
	font-weight: bold;
	border-width: 0.1px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	border-color: rgba(236, 29, 36, 0.8);
	background-color: rgba(236, 29, 36, 0.8);
`;

export const SideBContainer = styled.div` 
	display: flex;
	flex-grow: 3;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	position: relative;
	width: 600px;
	background-color: rgba(236, 29, 36, 0.8);
`;

export const FirstImage = styled(HerosImg)`
	animation-delay: 1.5s;
`;

export const SecondImage = styled(HerosImg)`
	animation-delay: 4s;
`;

export const ThirdImage = styled(HerosImg)`
	animation-delay: 6s;
`;

export const FourthImage = styled(HerosImg)`
	animation-delay: 8s;
`;

export const FifthImage = styled(HerosImg)`
	animation-delay: 10s;
`;