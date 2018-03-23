import React, {Component} from 'react'

class AccountBalance extends Component {
  render() {
    const debitsTotal = this.props.debits.reduce((sum, item)=>{
      return item.amount + sum
    },0)
    const creditsTotal = this.props.credits.reduce((sum, item)=>{
      return item.amount + sum
    },0)
    return (
      <div>
        <p>
        Debits:
          {debitsTotal}
        </p>
        <p>
        Credits:
          {creditsTotal}
        </p>
        <p>Balance: {debitsTotal-creditsTotal}</p>
      </div>
    );
  }
}

export default AccountBalance;