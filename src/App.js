import React from 'react';
import './App.css';
import NewDrinkControl from './component/NewDrinkControl';
import DrinkList from './component/DrinkList';
import Header from './component/Header';
import Error404 from './component/Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterDrinkList: []
    };
    this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this);
  }

  handleAddingNewDrinkToList(newDrink){
    var newMasterDrinkList = this.state.masterDrinkList.slice();
    newMasterDrinkList.push(newDrink);
    this.setState({masterDrinkList: newMasterDrinkList});
  }
  
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Switch>
            <Route exact path='/' component={Header}/>
            <Route exact path='/drinklist' render={()=><DrinkList drinkList={this.state.masterDrinkList} />} />
            <Route path='/newdrinkcontrol' render={()=><NewDrinkControl onNewDrinkCreation={this.handleAddingNewDrinkToList} />} />
            <Route component={Error404} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
