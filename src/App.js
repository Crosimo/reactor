import React, { Component } from 'react'

export default class App extends Component {
    state = {
        data: new Date(),
        
    }
    timed = {
        timer: null
    }
    componentDidMount() {
         this.timed.timer = setInterval(() => {
          this.setState({data: new Date()})
      },1000)
    }
    componentDidUnMount() {
        clearInterval(this.timed.timer)
    }
    render() {
        return (
            <div>
              Il est {this.state.data.getHours()}:{this.state.data.getMinutes()}:{this.state.data.getSeconds()} 
            </div>
        )
    }
}

