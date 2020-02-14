import React from "react";
import DrinkOrder from './DrinkOrder';





function Drink(props) {
  return (
    <div>    
        <h4>{props.brand}</h4>
        <p>{props.name}</p>
        <p>{props.price}$</p>
        <p>{props.alcohol}%</p> 
        <div>
          <DrinkOrder/>
        </div>
        
        
    
    </div>
  );
}

export default Drink;
