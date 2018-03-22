import React, {Component} from 'react'
import CreditData from '../api/credits'

class Credits extends Component {
  render() {
    return (
      <div>
        {
          CreditData.map(item=>{
            return item.description
          })
        }
      </div>
    )
  }
}

export default Credits