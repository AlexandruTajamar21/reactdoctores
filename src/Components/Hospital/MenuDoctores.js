import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDoctores extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Navbar</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctores">Doctores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/añadedoctor">NuevoDoctor</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
