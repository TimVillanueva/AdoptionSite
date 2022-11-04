import React from 'react';
import { Link } from 'react-router-dom'

function LogOut(props) {

    return (
        <div className="login-page">
            <div className="login-container">
            <h1 style={{padding: "10px"}}> Successfully Logged Out!</h1>
            <Link to="/" onClick ={props.getLogInStatus()}><h2>Return Home</h2></Link>
            </div>
        </div>
    );
}

export default LogOut;