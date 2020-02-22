import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

function NewDrink(props){

    let _brand = null;
    let _name = null;
    let _price = null;
    let _alcohol = null;
    
    function handleNewDrinkSubmission(event) {
        event.preventDefault();
        props.onNewDrinkCreation({brand: _brand.value, name: _name.value, price: _price.value, alcohol: _alcohol.value, id: v4()});
        _brand.value = ''
        _name.value = ''
        _price.value = ''
        _alcohol.value = ''
      }

      var Links = {
        color: 'white',
        fontWeight: 'bold'
      };

    return (
      <div>
        <h3>Create a Drink!</h3>
        <form onSubmit={handleNewDrinkSubmission}>
          <input
            type='text'
            id='brand'
            placeholder='Brand?'
            ref={(input) => {_brand = input;}}
            /> <br></br>
          <input
            type='text'
            id='drinkName'
            placeholder='Drink Name?'
            ref={(input) => {_name = input;}}
            /> <br></br>
          <input
            type='text'
            id='price'
            placeholder='price?'
            ref={(input) => {_price = input;}}
            /> <br></br>
            <input 
            type='text'
            id='alcohol'
            placeholder='Alcohol Percentage?'
            ref={(input) => {_alcohol = input;}}
            /> <br></br>
          <button type='submit'>Send it!</button>
        </form>
        <Link to='/drinklist' style={Links}>View Drinks?</Link>
      </div>
    );
  }
 
  NewDrink.propTypes = {
    onNewTicketCreation: PropTypes.func
  };

export default NewDrink;
