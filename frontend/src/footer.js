import React from 'react';
import './App.css'; // Import your CSS file for styling


const Footer = () => {
    return (
        <footer >
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>

    );
};

export default Footer;