import React from 'react'
import { Link } from '../../node_modules/react-router-dom/cjs/react-router-dom.min';
import Dropdown from './Dropdown';

function Nav() {
    return (
        <div className="row row-adj">
          <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item">
                <Link to="/About">About</Link>
                <Dropdown />
                </li>
                <li className="nav__menu-item">
                <Link to="/">Admissions</Link>
                </li>
                <li className="nav__menu-item">
                <Link to="/">Degrees & Advising</Link>
                </li>
                <li className="nav__menu-item">
                <Link to="/">Departments</Link>
                </li>
                <li className="nav__menu-item">
                <Link to="/">Faculty</Link>
                </li>
                <li className="nav__menu-item">
                <Link to="/">Alumini</Link>
                </li>
                <li className="nav__menu-item">
                <Link to="/">Giving</Link>
                </li>
                <li className="nav__menu-item">
                <Link to="/">Pre-College & <br/>Summer programs</Link>
                </li>
                <li className="nav__menu-item">
                <Link to="/">Events & <br/>Performances</Link>
                </li>
                
            </ul>
            </nav>
        </div>
    )
}

export default Nav
