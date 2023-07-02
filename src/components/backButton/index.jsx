import React from 'react'
import {
    BackBtn,
    BackIcon,
} from './style'

export default function BackButton({ onClick, children }) {
    return (
        <BackBtn onClick={onClick}>
            <BackIcon>&lt;</BackIcon>
            {children}
        </BackBtn>
    )
}