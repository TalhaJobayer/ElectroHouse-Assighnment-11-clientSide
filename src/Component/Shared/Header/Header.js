import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>
               <Link to={'/home'} >Home</Link>
               <Link to={'/about'} >About</Link>
            </h1>
        </div>
    );
};

export default Header;