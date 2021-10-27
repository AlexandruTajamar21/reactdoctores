import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetallesDoctor from './Hospital/DetallesDoctor'
import InsertaDoctor from './Hospital/InsertaDoctor'
import MenuDoctores from './Hospital/MenuDoctores'
import ModificaDoctor from './Hospital/ModificaDoctor'
import TablaDoctores from './Hospital/TablaDoctores'

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <MenuDoctores/>
                    <Switch>
                        <Route exact path="/doctores" component={TablaDoctores}></Route>
                        <Route exact path="/añadedoctor" component={InsertaDoctor}></Route>
                        <Route exact path="/modificadoctor/:id" render={props=>{
                                var id = props.match.params.id;
                                return(<ModificaDoctor iddoctor={id}/>)
                            }}>
                        </Route>
                        <Route exact path="/detallesdoctor/:id" render={props=>{
                                var id = props.match.params.id;
                                return(<DetallesDoctor iddoctor={id}/>)
                            }}>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
