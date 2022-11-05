import React from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { FaExclamation } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Login(props) {

let history = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();
props.getLogInStatus();
history(-1);
}

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Log In</h1>
            <form className = "login-form" onSubmit={handleSubmit}>
                <h3 className="login-header">username <AiOutlineMail style={{
                    fontSize:"30px",
                    position: "relative",
                    bottom: "-6px",
                }}/></h3>
                
                <input className="login-input"type="username" value={props.username} onChange ={(e)=>props.getUsername(e.target.value)} /> 
                
                <h3 className="login-header">password<RiLockPasswordLine style={{
                    fontSize:"30px",
                    position: "relative",
                    bottom: "-4px",
                    left: "5px"
                }}/></h3>
                <input className="login-input"type="password" />
                
                <input type="submit" className = "login-submit" />
            </form>
            <a href=""  style={{width: "100px"}}>Forgot Password?</a> 
            
            <div className="login-alternates"></div>
            <h2>or Sign Up with </h2>
            <FcGoogle style={{
                fontSize:"40px",
                padding: "0 20px 0 0"
            }}/>
            <BsFacebook style={{
                fontSize:"40px",
                padding: "0 0 0 20px"
            }}/>
            </div>
            <div className="login-hider"><FaExclamation style={{}}/>Help!</div>
            <div className="login-help">Input any username and password to activate functionality</div>
        </div>
    );
}

export default Login;