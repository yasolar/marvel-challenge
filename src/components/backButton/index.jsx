import React from 'react'
import {
    BackBtn,
    BackIcon,
} from './style'

export default function BackButton({ onClick, text, secondary }) {
    return (
        <BackBtn secondary={secondary} onClick={onClick}>
            <BackIcon>&lt;</BackIcon>
            {text}
        </BackBtn>
    )
}