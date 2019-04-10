import React from 'react'
import { Link } from 'react-router-dom';
import './navBar.sass'

const Navbar = () => {
    return (
        <div className="contenido">
            <nav className="Menu">
                <ul>
                    <li>
                        <Link to='Post' className="Texto">Post</Link>
                    </li>
                    <li>
                        <Link to='Albums' className="Texto">Albums</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;