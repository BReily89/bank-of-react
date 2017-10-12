import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import AccountBalance from './components/AccountBalance'
import axios from 'axios'
import Debits from './components/Debits'
import Credit from './components/Credit'

class App extends Component {
  state = {
    user: {
      userName: 'Bob',
      memberSince: '8/25/99',
    },
    debits: [],
    credits: []
  }

getDebits = () => {
  axios.get("http://localhost:400/debits")
  .then((response) => {
    const debits = response.data
    this.setState({ debits: debits })
  })
  .catch((error) => {
    console.error("Error: ", error)
  })
}
getCredit = () => {
  axios.get("http://localhost:4000/credit")
  .then((response) => {
    const debits = response.data
    this.setState({ debits: debits })
  })
  .catch((error) => {
    console.error("Error: ", error)
  })
}
componentWillMount() {
  this.getDebits()
  this.getCredit()
}


  render () {
    const AccountBalanceWrapper = () => {
      return (<AccountBalance accountBalance={this.state.accountBalance} />)
    }

    const UserProfileWrapper = () => {
      return (<UserProfile
        userName={this.state.user.userName}
        memberSince={this.state.user.memberSince}
      />)
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper} />
          <Route exact path="/user" render={UserProfileWrapper} />
        </Switch>
      </Router>
    )
  }
}

export default App