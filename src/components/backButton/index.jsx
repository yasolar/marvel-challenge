import React from 'react'
import {
    BackBtn,
    IconContainer,
} from './style'

export default function BackButton({ onClick, secondary, children }) {
    return (
        <BackBtn secondary={secondary} onClick={onClick}>
            <IconContainer>
                {children}
            </IconContainer>
        </BackBtn>
    )
}