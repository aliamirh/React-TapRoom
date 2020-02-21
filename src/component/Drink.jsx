import React from 'react';
import DrinkOrder from './DrinkOrder';

function Drink(props) {
  var OrderBox = {
    border: '2px solid black',
    backgroundColor: '#445b6e',
    borderRadius: 30,
    padding: '5px'
  };

  var menueContainer = {
    border: '2px solid black',
    float: 'right',
    padding: '10px',
    backgroundColor: '#384652',
    borderRadius: 30
  };

  return (
    <div style={menueContainer}>
      <h4>Brand: {props.brand}</h4>
      <p>Drink Name: {props.name}</p>
      <p>{props.price}$</p>
      <p>Alcohol percentage: {props.alcohol}%</p>
      <div style={OrderBox}>
        <DrinkOrder />
      </div>
    </div>
  );
}

export default Drink;
