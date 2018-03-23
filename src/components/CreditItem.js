import React, { Component } from 'react'

class CreditItem extends Component {
  render(){
    return (
      <ul>
        <li>Description: {this.props.description}</li>
        <li>Amount: {this.props.amount}</li>
        <li>Date: {this.props.date}</li>
      </ul>
    )
  }

}

export default CreditItem