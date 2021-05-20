import React, { Component } from 'react'
import shoeArray from '../Shoe_Array'
import Card from './Card'

export default class Container extends Component {

    state = {
        shoes: []
    }

   componentDidMount(){
       this.setState({
           shoes: shoeArray
       })
   }
   
   shoesToRender = () => {
      return this.state.shoes.map( shoe => <Card shoe={shoe} key={shoe.id}/>)
   }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.shoesToRender()}
            </div>
        )
    }
}
