import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Apuestas from './Champions/Apuestas';
import DespliegaEquipo from './Champions/DespliegaEquipo';
import DespliegaJugadores from './Champions/DespliegaJugadores';
import DetallesJugador from './Champions/DetallesJugador';
import HomeChampions from './Champions/HomeChampions';
import MenuChampions from './Champions/MenuChampions'
import NuevaApuesta from './Champions/NuevaApuesta';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <MenuChampions/>
                    <Switch>
                        <Route exact path="/" component={HomeChampions}></Route>
                        <Route exact path="/apuestas" component={Apuestas}></Route>
                        <Route exact path="/nuevaapuesta" component={NuevaApuesta}></Route>
                        <Route exact path="/equipo/:id" render={props=>{
                                var id = props.match.params.id;
                                return(<DespliegaEquipo idequipo={id}/>)
                        }}></Route>
                        <Route exact path="/jugadores/:equipo" render={props=>{
                                var equipo = props.match.params.equipo;
                                return(<DespliegaJugadores idequipo={equipo}/>)
                        }}></Route>
                        <Route exact path="/detallesJugador/:id" render={props=>{
                                var id = props.match.params.id;
                                return(<DetallesJugador idjugador={id}/>)
                            }}>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
