import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({id}) => {
    return (
        <nav id={id}>
            <NavLink to="/demos">demos</NavLink>
            <NavLink to="/contacto">contacto</NavLink>
        </nav>
    )
}

export default Nav
