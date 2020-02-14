import React from "react";
import { Link } from 'react-router-dom';

class DrinkOrder extends React.Component {
    state = {
        order: 0
    };
    render(){
        return (
            <div>
                <button>-</button>
                <span>{this.state.order}</span>
                <button>+</button>
                <div><Link to='/'>Home</Link></div>
            </div>
        );
    }
}

export default DrinkOrder;