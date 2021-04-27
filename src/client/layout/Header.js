import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink to="/" exact>
                <h1>Horacio Gutierrez</h1>
            </NavLink>
            <nav>
                <NavLink to="/demos">demos</NavLink>
                <NavLink to="/contacto">contacto</NavLink>
            </nav>
        </header>
    )
}

export default Header
