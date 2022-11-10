import React from 'react';
import { Link } from 'react-router-dom'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'


function Header(props) {

//if logged in, display name + log out, else display log in button
    return props.logInStatus ? (
        <div className="header">
            <div className="header-home-container">
                <Link to="/" className="header-home" ><img id="logo" src={require('../Photos/Logo.png') }/></Link>
            </div>
            <div className="header-other-container">
                <Link to="/Saved" className="header-saved"><BsFillBookmarkHeartFill 
                    style={{fontSize:"50px",
                    position:"absolute",
                    right: "130px",
                    top: "30px"
                }}/>
                </Link>
                <div className = "divider" style={{
                    position:"absolute",
                    right: "200px",
                    top: "25px"
                }}></div>
                <h1 className="header-login" style={{
                    position:"absolute",
                    right: "200px",
                }}>Happy Adopting, {props.username}!</h1>
                <Link to="/LogOut"  style={{
                    fontSize: "30px",
                    position: "absolute",
                    top: "40px",
                    right: "10px"
                }}>Log Out</Link>
            </div>
            
        </div>
    ) : (
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
    )
}

export default Header;

