import React from "react";


class DrinkOrder extends React.Component {


    formatOrder(){
        const { order } = this.state;
        return order === 0 ? <span style={{color:'red'}}>Zero</span> 
        : order >=5 ?  <span style={{color:'green'}}>{this.state.order}</span> :order;
        
    
    }

    formatWord(){
 
        const { order } = this.state;
        return  order === 1 ? 'Order' :'Orders';
    }
    render(){
        return (
            <div>
                
                <button onClick={this.decrementOrder}>-</button>
                <span>{this.state.order}</span>
                <button onClick={this.incrementOrder}>+</button>
                <div>
                <p>You have {this.formatOrder()} {this.formatWord()}.</p>
                </div>
            </div>
        );
        
    }
    
}

export default DrinkOrder;