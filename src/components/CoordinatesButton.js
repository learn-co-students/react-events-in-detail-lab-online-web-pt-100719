import React, {Component} from 'react'

export default class CoordinatesButton extends Component { 
    handleCoordinates = (e) => {
        this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }
    render() {
        return(<button onClick={this.handleCoordinates}></button>)
    }
}

