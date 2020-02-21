import React from 'react';

function NewTap(){

    let _brand = null;
    let _drinkName = null;
    let _cost = null;
    let _alcohol = null;
    
    function handleNewTapSubmission(event) {
        event.preventDefault();
        _brand.value = ''
        _drinkName.value = ''
        _cost.value = ''
        _alcohol.value = ''
      }

    return (
      <div>
        <form onSubmit={handleNewTapSubmission}>
          <input
            type='text'
            id='brand'
            placeholder='Brand?'
            ref={(input) => {_brand = input;}}
            />
          <input
            type='text'
            id='drinkName'
            placeholder='Drink Name?'
            ref={(input) => {_drinkName = input;}}
            />
          <input
            type='number'
            id='cost'
            placeholder='Cost?'
            ref={(input) => {_cost = input;}}
            />
            <input 
            type='number'
            id='alcohol'
            placeholder='Alcohol Percentage?'
            ref={(input) => {_alcohol = input;}}
            />
          <button type='submit'>Send it!</button>
        </form>
      </div>
    );
  }
 

export default NewTap;
