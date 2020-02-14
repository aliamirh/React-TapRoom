import React from "react";
import Drink from './Drink';
import { Link } from 'react-router-dom';


const mainDrinkList = [
  {
    name: "CoreLite",
    brand: "Core",
    price: 3,
    alcohol: 2.3
  },

  {
    name: "MikeLite",
    brand: "Mike",
    price: 5,
    alcohol: 5
  },

  {
    name: "StudioLite",
    brand: "Visual",
    price: 8,
    alcohol: 9
  }
];

function DrinkList() {
  return (
    <div>
      <h3>Menue</h3>
      <div>
        {mainDrinkList.map((drink, index) => 
          <Drink
            name={drink.name}
            brand={drink.brand}
            price={drink.price}
            alcohol={drink.alcohol}
            key={index}
          />
        )}
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/drinkorder'>Order</Link>
      </div>
    </div>
  );
}

export default DrinkList;
