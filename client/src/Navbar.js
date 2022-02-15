import react from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Doja tweets</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/about">About </a>
                <a href="/live">Latest </a>
            </div>
        </nav>
     );
}
 
export default Navbar;