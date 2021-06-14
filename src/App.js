import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CoffeeStyle from "./components/CoffeeStyle/CoffeeStyle";
import CoffeeSize from "./components/CoffeeSize/CoffeeSize";
import CoffeeExtras from "./components/CoffeeExtras/CoffeeExtras";
import MilkExtras from "./components/MilkExtras/MilkExtras";
import SugarExtras from "./components/SugarExtras/SugarExtras";
import StartCoffee from "./components/StartCoffee/StartCoffee";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={StartCoffee} />
        <Route path="/style" component={CoffeeStyle} />
        <Route path="/size" component={CoffeeSize} />
        <Route path="/extra" component={CoffeeExtras} />
        <Route path="/milk-details" component={MilkExtras} />
        <Route path="/sugar-details" component={SugarExtras} />
      </Switch>
    </Router>
  </div>
);

export default App;
