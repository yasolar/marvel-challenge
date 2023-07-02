import styled from "styled-components";

export const BackBtn = styled.button`
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 45px;
	width: 120px;
	font-size: 16px;
	font-weight: bold;
	padding: 10px 20px;
	border-radius: 30px;
	margin-left: 30px;
	transition: background-color 0.3s ease;
	color: ${({ secondary }) => (secondary ? 'rgba(236, 29, 36, 0.8)' : '#fff')};
	border: ${({ secondary }) => (secondary ? '2px solid rgba(236, 29, 36, 0.8)' : 'none')};
	background-color: ${({ secondary }) => (secondary ? 'transparent' : 'rgba(236, 29, 36, 0.8)')};
`;

export const BackIcon = styled.span`
	font-size: 18px;
	margin-right: 10px;
`;