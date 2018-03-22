import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Debits from './components/Debits'
import Credits from './components/Credits'
import DebitData from './api/debits'
import CreditData from './api/credits'
import AccountBalance from './components/AccountBalance'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/debits" component={Debits}/>
          <Route exact path="/credits" component={Credits}/>
        </Switch>
        <AccountBalance debits={DebitData} credits={CreditData}/>
        </div>
      </Router>
    );
  }
}

export default App;
