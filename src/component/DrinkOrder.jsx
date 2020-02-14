import React from "react";
import { Link } from 'react-router-dom';

class DrinkOrder extends React.Component {
    state = {
        order: 0
    };

    incrementOrder = () => {
        this.setState( prevState =>  ({           
                order: prevState.order + 1         
        }));
    }
    decrementOrder = () => {
        this.setState( prevState => ({
                order: prevState.order -1,     
        }));
    }
    render(){
        return (
            <div>
                <button onClick={this.decrementOrder}>-</button>
                <span>{this.state.order}</span>
                <button onClick={this.incrementOrder}>+</button>
                <div><Link to='/'>Home</Link></div>
            </div>
        );
    }
}

export default DrinkOrder;