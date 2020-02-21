import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var Links = {
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div>
      <h3>The Tap Room</h3>
      <p>Come on in!</p>
      <Link to='/DrinkList'>
        <span style={Links}>Drinks</span>
      </Link>
    </div>
  );
}

export default Header;
