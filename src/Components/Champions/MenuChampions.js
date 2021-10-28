import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global'
import { Redirect } from 'react-router';

export default class MenuChampions extends Component {

    state = {
        equipos:[]
        ,status:false
    }
    cargaEquipos = () =>{
        var request = "/api/Equipos"
        var url = Global.urlChampions+request;

        axios.get(url).then(res=>{
            this.setState({
                equipos:res.data
                ,status:true
            })
        })
    }
    componentDidMount = () =>{
        this.cargaEquipos();
    }

    abreEquipo = (e,id) =>{
        e.preventDefault();
        return(<Redirect to={"/equipo/"+id}></Redirect>)
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Champions</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {this.state.equipos.map((equi,index)=>{
                                        return(<li key={index} className="text-dark"><NavLink className="nav-link bg-white text-dark" to={"/equipo/" + equi.idEquipo}>{equi.nombre}</NavLink></li>)
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
