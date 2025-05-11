import React from 'react';
import './header.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
  


function Header() {
    return (
        <header className="header">
           
            <h1>Welcome to My Website</h1>
            <nav>
                <ul>
                    <Link to="/">Accueil</Link>  
                    <Link to="/about">À propos</Link>  
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;