import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance'

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          <Link to="/user">User Page</Link>
          <br />
          <br />
          <Link to="/account">Account Balance</Link>
          <br />
          <br />
          <Link to="/debits">Debit</Link>
          <br />
          <br />
          <Link to="credit">Credit</Link>
          <br />
          <br />
          <AccountBalance accountBalance={this.props.accountBalance}/>


        </div>
    );
  }
}

export default Home;