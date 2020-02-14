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
        if(this.state.order <= 0){
            this.setState({
                order: 0
            });
        }else{
            this.setState( prevState => ({
                    order: prevState.order -1,     
            }));
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.decrementOrder}>-</button>
                <span>{this.state.order}</span>
                <button onClick={this.incrementOrder}>+</button>
            </div>
        );
    }
}

export default DrinkOrder;