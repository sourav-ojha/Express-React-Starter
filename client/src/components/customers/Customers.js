import React, { Component } from 'react'
import './customers.css'

 class Customers extends Component {
     // eslint-disable-next-line no-useless-constructor
     constructor(){
         super();
         this.state ={
             customers : []
         }
     }
     componentDidMount(){
         fetch('/api/customers')
         .then(res => res.json())
         .then(customers => this.setState({customers}, () =>
           console.log("customer fetched ..",customers)));
     }
    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
        {this.state.customers.map(customers => 
          <li key={customers.id}>{ customers.firstName } {customers.lastName} </li>
          )}
      </ul>
            </div>
        )
    }
}

export default Customers;
