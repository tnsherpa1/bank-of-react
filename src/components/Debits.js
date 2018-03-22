import React, {Component} from 'react'
import DebitData from '../api/debits'

class Debits extends Component {
  render() {
    return (
      <ul>
      {
        DebitData.map(item=>{
          return <li>{item.description}</li>
      })
      }
      </ul>
    )
  }
}
export default Debits