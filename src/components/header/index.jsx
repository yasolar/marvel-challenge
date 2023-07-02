import React from 'react'
import {
    HeaderContainer,
} from './style'

export default function Header({ children }) {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    )
}