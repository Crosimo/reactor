import React, { Component } from 'react'
import Articles from './composants/Articles'

export default class App extends Component {
    state = {
        argent: 20,
        panier: [],
        articles: [
            { nom: "ananas", prix: 5, stock: 2, src: "Ananas", id:0 },
            { nom: "fraise", prix: 3.2, stock: 10, src: "fraise", id: 1 },
            {nom: "guoyave", prix: 12, stock : 1, src : "../images/guoyave.jpg", id:2}
        ]
    }
    render() {
        return (
        
        <Articles objet={ this.state }/>
          
        )
    }
}

