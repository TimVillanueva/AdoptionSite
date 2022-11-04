import React from 'react';
import Featured from './Featured';
import GuidedSearch from './GuidedSearch';



function Landing(props) {
    return (
        <div className="landing">
            <div className="landing-featured">
                <Featured />
            </div>
            <div className="landing-search">
                <form className = "landing-search-form">
                    <input type="text" placeholder="Search Pets!" id="search"/>
                    <input type="text" placeholder="Location" id="location"/>
                    <input type="submit" value="go!"/>
                </form>
                <div className="guided-search-container">
                    <h1>Let us help you pick your purrfect pet!</h1>
                    <GuidedSearch/>
                </div> 
            </div>
            
        </div>
    );
}

export default Landing;