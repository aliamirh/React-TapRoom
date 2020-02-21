import React from 'react';

class OrderTotal extends React.Component() {
    


  addOrders() {
    console.log('event handler')
  }
  render() {
    return (
      <div>
        <button onClick={this.addOrders}>Order</button>
      </div>
    );
  }
}

export default OrderTotal;