import React from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import { Switch, Route } from 'react-router-dom';
import DrinkList from "./component/DrinkList";



function App() {
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

export default App;
