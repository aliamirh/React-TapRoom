import React from 'react';
import './App.css';
import Header from './component/Header.jsx';
import { Switch, Route } from 'react-router-dom';
import DrinkList from './component/DrinkList';
import DrinkOrder from './component/DrinkOrder';
import NewTap from './component/NewTap';

class App extends React.Component {
  
  
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Switch>
            <Route exact path='/' component={Header} />
            <Route exact path='/drinklist' render={() => <DrinkList/>} />
            <Route exact path='/drinkorder' render={() => <DrinkOrder/>} />
            <Route path='/newtap' component={NewTap} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
