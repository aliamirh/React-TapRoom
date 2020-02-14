import React from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import PictureList from "./component/DrinkList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PictureList />
      </header>
    </div>
  );
}

export default App;
