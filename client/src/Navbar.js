import react from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/">Home </a>
                <a href="/about">About </a>
                <a href="/live">Latest </a>
                <a href='/all'>Library </a>
            </div>
        </nav>
     );
}
 
export default Navbar;