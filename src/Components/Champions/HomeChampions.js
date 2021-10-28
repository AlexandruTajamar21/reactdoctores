import React, { Component } from 'react'
import imagen from './../Assets/champions.png'

export default class HomeChampions extends Component {
    render() {
        return (
            <div>
                <h1><img src={imagen} style={{width:"100%",height:"100%"}}></img></h1>
            </div>
        )
    }
}
