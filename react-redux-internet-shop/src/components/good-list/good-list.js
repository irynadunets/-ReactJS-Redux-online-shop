import React from 'react';
import GoodItem from '../good-item';
import './good-list.css';
import CardGroup from 'react-bootstrap/CardDeck';

const GoodList = ({goods, onAddedToCart}) => {
return (
    <CardGroup>
    {
      goods.map((good) => {
        return (
          <GoodItem
           key={good.id}
           good={good}
           onAddedToCart={() => onAddedToCart(good.id)}
          />
        )
      })
    }
    </CardGroup>
  );
};


export default GoodList;
