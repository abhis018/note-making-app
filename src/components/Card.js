import React from 'react';
import './Card.css';

const Card = ({Title, Description, Date}) => {
    return (
        <div className="newBox">
            <div className="grid">
                <h2><span className="bold">Title:</span>{Title}</h2>
                <p><span className="bold">Date(YYYY-MM-DD):</span>{Date}</p>
                <p><span className="bold">Description:</span>{Description}</p>
            </div>
        </div>
    );
}

export default Card;