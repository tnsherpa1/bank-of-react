import React, {Component} from 'react'
import DebitData from '../api/debits'
import CreditData from '../api/credits'

class AccountBalance extends Component {
  render() {
    return (
      <div>
        Balance:
        {
          this.props.debits.map(item=>{
            return item.amount
          })
        }
      </div>
    );
  }
}

export default AccountBalance;