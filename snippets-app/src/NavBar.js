import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Snippets</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/auth">Login/Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
