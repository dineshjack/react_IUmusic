import React, { Component } from 'react'

class Dropdown extends Component {

    
    
    render() {
        return (
            <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href="/">Directory</a>
        </li>
        <li className="nav__submenu-item ">
          <a href="/">Dean's welcome</a>
        </li>
        <li className="nav__submenu-item ">
          <a href="/">Publications</a>
        </li>
      </ul>
        )
    }
}

export default Dropdown
