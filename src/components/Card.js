import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                <h3>Name: {this.props.shoe.name}</h3>
                <h4>Brand: {this.props.shoe.brand}</h4>
                <h4>Color: {this.props.shoe.color}</h4>
            </div>
        )
    }
}
