import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



const Credit = (props) =>{
return (
// class Credit extends Component {
    
    // Constructor(Props) {
    //     super(props)

    //     this.props = {
    //         decsriptions:'',
    //         amount:'',
    //         date:''
        <div>
                <p>Description: {props. description}</p>
                <br />
                <br />
                <p>Amount: {props.amount}</p>
                <br />
                <br />
                <p>Date: {props.date}</p>
               <p> Credit</p>
               </div>
);
};

//         );
//     };
// }

export default Credit;