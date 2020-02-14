import React from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import { Switch, Route } from 'react-router-dom';
import Drink from "./component/Drink";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route exect path='/' component={Header} />
        <Route expect path='/Drink' component={Drink} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
