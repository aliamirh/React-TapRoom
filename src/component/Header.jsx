import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h3>The Tap Room</h3>
      <p>Come on in and drink up!</p>
      <Link to='/DrinkList'>Drinks</Link>
    </div>
  );
}

export default Header;
