import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
    return (
        <header id="main-header">
            <NavLink to="/" exact>
                <h1>HG</h1>
            </NavLink>
            <Nav id="main-nav"/>
        </header>
    )
}

export default Header
