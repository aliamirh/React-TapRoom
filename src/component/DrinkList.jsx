import React from 'react';
import Drink from './Drink';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function DrinkList(props) {
  var Links = {
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div>
    <h4>The Tap Room</h4>
      <h3>Menu</h3>
      <div>
        {props.drinkList.map((drink) => (
          <Drink
            name={drink.name}
            brand={drink.brand}
            price={drink.price}
            alcohol={drink.alcohol}
            key={drink.id}
          />
        ))}
      </div>
      <div>
        <Link to='/newdrinkcontrol' style={Links}>
          Make another
        </Link>
      </div>
    </div>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array
};
export default DrinkList;
