import React from 'react';
import Drink from './Drink';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const mainDrinkList = [
  {
    name: 'CoreLite',
    brand: 'Core',
    price: 3,
    alcohol: 2.3
  },

  {
    name: 'MikeLite',
    brand: 'Mike',
    price: 5,
    alcohol: 5
  },

  {
    name: 'StudioLite',
    brand: 'Visual',
    price: 8,
    alcohol: 9
  }
];

function DrinkList() {
  var Links = {
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div>
      <h3>Menu</h3>
      <div>
        {mainDrinkList.map((drink, index) => (
          <Drink
            name={drink.name}
            brand={drink.brand}
            price={drink.price}
            alcohol={drink.alcohol}
            key={index}
          />
        ))}
      </div>
      <div>
        <Link to='/' style={Links}>
          Home
        </Link>
      </div>
    </div>
  );
}

DrinkList.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcohol: PropTypes.number.isRequired
};
export default DrinkList;
