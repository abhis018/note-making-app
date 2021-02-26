import React from 'react';
import Card from './Card';
import store from '../index';

const CardList = () => {
    return (
        <div className="cardlist">
            {store.getState().result.map((user, i) => (
                    <Card
                        key={i}
                        Title={store.getState().result[i].title}
                        Description={store.getState().result[i].description}
                    />
            ))} 
        </div> 
    )
}

export default CardList;