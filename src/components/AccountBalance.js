import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class AccountBalance extends Component {
  state = {
  }

  saveSomething = () => {
    console.log('Clicked')

    setTimeout(() => {
      this.setState({redirectToHome: true})
    }, 500)
  }

  render () {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Your balance is {this.props.accountBalance}</h1>
        <span> </span>
        <button onClick={this.saveSomething}>Redirect Button</button>
        <br />
        <br />
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default AccountBalance