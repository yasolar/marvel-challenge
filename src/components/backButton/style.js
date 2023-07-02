import styled from "styled-components";

export const BackBtn = styled.button`
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 45px;
	width: 120px;
	color: ${({ secondary }) => (secondary ? 'rgba(236, 29, 36, 0.8)' : '#fff')};
	font-size: 16px;
	font-weight: bold;
	padding: 10px 20px;
	border: ${({ secondary }) => (secondary ? '1px solid rgba(236, 29, 36, 0.8)' : 'none')};
	border-radius: 30px;
	margin-left: 30px;
	background-color: ${({ secondary }) => (secondary ? 'transparent' : 'rgba(236, 29, 36, 0.8)')};
	transition: background-color 0.3s ease;

	background-color: ${({ secondary }) => (secondary ? 'transparent' : 'rgba(236, 29, 36, 0.8)')};
	color: ${({ secondary }) => (secondary ? '#fff' : '#fff')};
	border: ${({ secondary }) => (secondary ? '1px solid rgba(236, 29, 36, 0.8)' : 'none')};
`;

export const BackIcon = styled.span`
	font-size: 18px;
	margin-right: 10px;
`;