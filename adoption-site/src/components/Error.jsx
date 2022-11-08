import React from 'react';
import {FaExclamation} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Error(props) {


let navigate = useNavigate();
const navigateHome = () => {
    navigate('/')
}
    return (
        <div style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        }}><h1 style ={{
            backgroundColor: "whitesmoke",
            borderRadius:"10px",
            boxShadow: "2px 2px 2px grey",
            width: "50%"
        }}> Something Went Wrong!</h1>
        <div className="login-hider"><FaExclamation style={{}}/>Help!</div>
                <div className="login-help" style={{margin: "0px 0px 100px 80px", height: "100px", }}>If this process takes longer than 10 seconds, you may need to try a new search! </div>
            <button style={{
                backgroundColor: "whitesmoke",
                borderRadius:"10px",
                boxShadow: "2px 2px 2px grey",
                width: "20%",
                position: "absolute",
                right: "600px",
                top: "250px"
            }} onClick = {navigateHome}> Return Home</button>        
        </div>
    );
}


export default Error;