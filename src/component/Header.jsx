import React from "react";
import DrinkList from '/component/DrinkList';

function Header() {
  return (
    <div>
      <h3>Tap Room</h3>
      <p>Come on in and drink up!</p>
      <Link to='/DrinkList'>Drinks</Link>
      
    </div>
  );
}

export default Header;
