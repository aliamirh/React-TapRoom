import React from "react";



function Drink(props) {
  return (
    <div>    
        <h4>{props.brand}</h4>
        <p>{props.name}</p>
        <p>{props.price}$</p>
        <p>{props.alcohol}%</p> 
    
    </div>
  );
}

export default Drink;
