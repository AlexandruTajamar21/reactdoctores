import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';


export default class InsertaDoctor extends Component {

    state = {
        mensaje: ""
        ,status:false
    }

    cajaid = React.createRef();
    cajaidhospital = React.createRef();
    cajaapellido = React.createRef();
    cajaespecialidad = React.createRef();
    cajaSalario = React.createRef();

    insertaDoctor = (e) =>{
        e.preventDefault();
        var request = "/api/Doctores";
        var url = Global.urlCruddDoctores + request;

        var idDoctor = parseInt(this.cajaid.current.value);
        var idHospital = parseInt(this.cajaidhospital.current.value);
        var apellido = this.cajaapellido.current.value;
        var especialidad = this.cajaespecialidad.current.value;
        var salario = parseInt(this.cajaSalario.current.value);

        var doctornew = {
            idDoctor:idDoctor
            ,idHospital:idHospital
            ,apellido:apellido
            ,especialidad:especialidad
            ,salario:salario
        }

        axios.post(url,doctornew).then(res=>{
            console.log("exito");
            this.setState({
                mensaje:"Insertado con EXITO"
                , status:true
            })
        })
    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/doctores"></Redirect>);
        }
        return (
        <div>
            <h1>Insertar Doctor</h1>
            <form>
                <div className="form-group row">
                    <label>idDoctor</label>
                    <input type="number" className="form-control" ref={this.cajaid}></input>
                </div>
                <div className="form-group row">
                    <label>idHospital</label>
                    <input type="text" className="form-control" ref={this.cajaidhospital}></input>
                </div>
                <div className="form-group row">
                    <label>Apellido</label>
                    <input type="text" className="form-control" ref={this.cajaapellido}></input>
                </div>
                <div className="form-group row">
                    <label>Especialidad</label>
                    <input type="text" className="form-control" ref={this.cajaespecialidad}></input>
                </div>
                <div className="form-group row">
                    <label>salario</label>
                    <input type="text" className="form-control" ref={this.cajaSalario}></input>
                </div>
                <button className="btn btn-info" onClick={this.insertaDoctor}> Insertar Doctor</button>
            </form>
            <h2 style={{color:"red"}}>{this.state.mensaje}</h2>
        </div>
        )
    }
}
