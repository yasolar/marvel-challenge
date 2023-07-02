import styled from "styled-components";

export const BackBtn = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	height: 45px;
	width: 120px;
	border-radius: 30px;
	margin-left: 30px;
	color: ${({ secondary }) => (secondary ? 'rgba(236, 29, 36, 0.8)' : '#fff')};
	border: ${({ secondary }) => (secondary ? '2px solid rgba(236, 29, 36, 0.8)' : 'none')};
	background-color: ${({ secondary }) => (secondary ? 'transparent' : 'rgba(236, 29, 36, 0.8)')};
`;

export const IconContainer = styled.span`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 16px;
	font-weight: bold;
	margin-inline: 18px;
`;