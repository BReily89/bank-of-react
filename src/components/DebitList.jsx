import React, { Component } from 'react';
import Debits from './Debits'
import Home from './Home'

const DebitsList = (props) =>{
    const debitDetails = props.debits.map((debits, index) => {
        return <Debits
        description={debits.description}
        date={debits.date}
        amount={debits.amount}

        key={index}/>;

    });

        
};


export default DebitsList