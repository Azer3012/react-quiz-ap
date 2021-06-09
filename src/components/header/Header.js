import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/header.css'
function Header() {
    return (
        <div className="header">
            <NavLink to={"/login"}>login</NavLink>
            <NavLink to={"/registration"}>registration</NavLink>
        </div>
    )
}

export default Header
