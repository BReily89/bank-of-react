import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DebitsList from './DebitList'
import AccountBalance from './AccountBalance'

var Debits = (props) => {
    
        return (
            <div>
                <p>Debits</p>
                <Link to ='/'>Home</Link>
            </div>
        );
    }

export default Debits;