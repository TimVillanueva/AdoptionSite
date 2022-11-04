import React from 'react';
import { Link } from 'react-router-dom'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'

function Header(props) {
    return (
        <div className="header">
            <div className="header-home-container">
                <Link to="/" className="header-home"><img id="logo" src={require('../Photos/Logo.png') }/></Link>
            </div>
            <div className="header-other-container">
                <Link to="/Saved" className="header-saved"><BsFillBookmarkHeartFill 
                    style={{fontSize:"50px"}}
                    />
                </Link>
                <div className = "divider"></div>
                <Link to="/Login" className="header-login">Log In</Link>
            </div>
            
        </div>
    );
}

export default Header;

