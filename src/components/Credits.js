import React, {Component} from 'react'
import CreditData from '../api/credits'
import CreditItem from './CreditItem'

class Credits extends Component {
  render() {
    const creditsList = CreditData.map((credit)=>{
      return <CreditItem description={credit.description}
                        amount={credit.amount}
                        date={credit.date} />
    })
    return (
      <div>
        <h1>CREDITS:</h1>
        {creditsList}
      </div>
    )
  }
}
export default Credits