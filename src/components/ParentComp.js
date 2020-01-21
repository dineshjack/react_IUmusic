import React, { Component } from 'react'
import data from '../data.json'
import UserList from './UserList';
import Nav from './Nav';

class ParentComp extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             jsonData : data.UserDetails
        }
        
    }
    
    render() {
        return (
            <div>
                <Nav/>
                <h1>parent comp</h1>
                <UserList jsonData={this.state.jsonData}/>
            </div>
        )
    }
}

export default ParentComp
