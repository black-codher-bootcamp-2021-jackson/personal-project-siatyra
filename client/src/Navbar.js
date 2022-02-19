import react from 'react';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        
            <div className="navigation">
                <nav className="navbar">
                <a href="/">Home </a>
                <a href="/about">About </a>
                <a href="/live">Latest </a>
                <a href='/all'>Library </a>
                </nav>
            </div>
     );
}
 
export default Navbar;