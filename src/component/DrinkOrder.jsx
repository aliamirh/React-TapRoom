import React from 'react';

class DrinkOrder extends React.Component {
  state = {
    order: 0
  };

  handleIncrementOrder = () => {
    this.setState(prevState => ({
      order: prevState.order + 1
    }));
  };
  handleDecrementOrder = () => {
    if (this.state.order <= 0) {
      this.setState({
        order: 0
      });
    } else {
      this.setState(prevState => ({
        order: prevState.order - 1
      }));
    }
  };

  formatOrder() {
    const { order } = this.state;
    return order === 0 ? (
      <span style={{ color: 'red' }}>Zero</span>
    ) : order >= 5 ? (
      <span style={{ color: 'green' }}>{this.state.order}</span>
    ) : (
      order
    );
  }
  formatWord() {
    const { order } = this.state;
    return order === 1 ? 'Order' : 'Orders';
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrementOrder}>-</button>
        <span>{this.state.order}</span>
        <button onClick={this.handleIncrementOrder}>+</button>
        <div>
          <p>
            You have {this.formatOrder()} {this.formatWord()}.
          </p>
        </div>
      </div>
    );
  }
}

export default DrinkOrder;
