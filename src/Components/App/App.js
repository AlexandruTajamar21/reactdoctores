import React, { Component } from 'react'
import Router from '../Router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Index from './../ChampionsHtml/index.html'

export default class App extends Component {
  render() {
    return (
      <div>
        <Index></Index>
      </div>
    )
  }
}

