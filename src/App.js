import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Debits from './components/Debits'
import Credits from './components/Credits'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/debits" component={Debits}/>
          <Route exact path="/credits" component={Credits}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
