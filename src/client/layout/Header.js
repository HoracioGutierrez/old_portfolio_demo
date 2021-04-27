import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
    return (
        <header>
            <NavLink to="/" exact>
                <h1>Horacio Gutierrez</h1>
            </NavLink>
            <Nav id="main-nav"/>
        </header>
    )
}

export default Header
