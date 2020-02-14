import React from "react";
import Drink from './Drink';

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
  );
}

export default DrinkList;
