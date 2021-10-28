import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class NuevaApuesta extends Component {

    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    state = {
        mensaje: ""
        ,status:false
    }

    insertarApuesta = (e) =>{
        e.preventDefault();
        var request = "/api/Apuestas"
        var url = Global.urlChampions + request;

        var nom = this.cajaUsuario.current.value;
        var res = this.cajaResultado.current.value;
        var fec = this.cajaFecha.current.value;

        var departamento = {
            idApuesta: 1
            ,usuario: nom
            ,resultado: res
            ,fecha:fec
        }

        axios.post(url,departamento).then(res =>{
            this.setState({
                mensaje:"Apuesta Aceptada"
                ,status: true
            })
        })
    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/apuestas"></Redirect>);
        }
        return (
            <div>
                 <h1>Insertar Departamento</h1>
                <form>
                    <div className="form-group row">
                        <label>Nombre</label>
                        <input type="text" className="form-control" ref={this.cajaUsuario}></input>
                    </div>
                    <div className="form-group row">
                        <label>Resultado</label>
                        <input type="text" className="form-control" ref={this.cajaResultado}></input>
                    </div>
                    <div className="form-group row">
                        <label>Fecha</label>
                        <input type="text" className="form-control" ref={this.cajaFecha}></input>
                    </div>
                    <button className="btn btn-info" onClick={this.insertarApuesta}> Insertar Departamento</button>
                </form>
                <h2 style={{color:"red"}}>{this.state.mensaje}</h2>
            </div>
        )
    }
}
