import React from 'react';

function Footer(props) {
    return (
        <>
        <div className="footer">
            <img id="footer-logo" src={require('../Photos/catIcon.png') }/>
            <img id="footer-logo" src={require('../Photos/Name.png') }/>
            <div className="footer-info">
                <h2>BSPA@gmail.com</h2>
                <h2>Austin, TX</h2>
                <h2>Legal</h2>
            </div>
        </div>
        
        </>
    );
}

export default Footer;