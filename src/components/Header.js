import React, { Component } from 'react'
import Parent from './Parent';
import Nav from './Nav';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            count :0,
            ParentName : "ParentUser"
        }
    }
    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    greetParent = () =>{
        alert(this.state.ParentName)
    }
    render() {
        return (
            <div>
                <Nav />
                <h1>Header Component</h1>
                <h1>{this.state.count}</h1>
                <button className='btn btn-danger' onClick={this.increment}>Incr</button>
                <Parent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Header
