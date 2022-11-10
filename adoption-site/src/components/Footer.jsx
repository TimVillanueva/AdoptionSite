import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer(props) {
    return (
        <>
        <div className="footer">
            <img id="footer-logo" src={require('../Photos/catIcon.png') }/>
            <img id="footer-logo" src={require('../Photos/Name.png') }/>
            <div className="footer-info">
                <h2>BSPA@gmail.com</h2>
                <h2>Austin, TX</h2>
                <a href="https://github.com/TimVillanueva/AdoptionSite" target="_blank"><BsGithub style={{fontSize:'30px', paddingRight:"10px"}}/></a>
                <a href="https://www.linkedin.com/in/timothy-villanueva/"><BsLinkedin style={{fontSize:"30px"}}/></a>
            </div>
        </div>
        
        </>
    );
}

export default Footer;