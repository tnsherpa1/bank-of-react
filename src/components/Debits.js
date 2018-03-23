import React, {Component} from 'react'
import DebitData from '../api/debits'
import DebitItem from './DebitItem'

class Debits extends Component {
  render() {
    const debitsList = DebitData.map((debit)=>{
      return <DebitItem description={debit.description}
                        amount={debit.amount}
                        date={debit.date} />
    })
    return (
      <div>
        <h1>DEBITS:</h1>
        {debitsList}
      </div>
    )
  }
}
export default Debits