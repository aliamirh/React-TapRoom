import React from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import { Switch, Route } from 'react-router-dom';
import DrinkList from "./component/DrinkList";




class App extends React.Component {

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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/drinklist' component={DrinkList} />
          </Switch>
        </header>
      </div>
    );
  }

  }
  

export default App;
