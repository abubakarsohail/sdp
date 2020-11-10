import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Duck, MallardDuck, ModelDuck, FlyRocketPowered} from './Simuduck';



function App() {

    let mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    let model: ModelDuck = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
