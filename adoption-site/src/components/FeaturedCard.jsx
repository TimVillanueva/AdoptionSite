import React from 'react';

function FeaturedCard(props) {
    return (
        <div className="featured-card">
            test
            <h1>{props.pet.name}</h1>
        </div>
    );
}

export default FeaturedCard;