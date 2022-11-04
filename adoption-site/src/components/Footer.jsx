import React from 'react';

function Footer(props) {
    return (
        <>
        <div className="footer">
            <img id="footer-logo" src={require('../Photos/catIcon.png') }/>
            <img id="footer-logo" src={require('../Photos/Name.png') }/>

        </div>
        <div className="footer-info">
            <h2>BSPA@gmail.com</h2>
            <h2>Austin, TX</h2>
            <h2>Legal</h2>
        </div>
        </>
    );
}

export default Footer;