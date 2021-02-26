import React from 'react';
import './Card.css';

const Card = ({Title, Description}) => {
    return (
        <div className="newBox">
            <div className="grid">
                <h2>Title:{Title}</h2>
                <p>Description:{Description}</p>
            </div>
        </div>
    );
}

export default Card;