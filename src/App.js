import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import CoffeeSize from "./components/CoffeeSize/CoffeeSize";
import CoffeeExtras from "./components/CoffeeExtras/CoffeeExtras";
import MilkExtras from "./components/ExtraDetails/ExtraDetails";
import StartCoffee from "./components/StartCoffee/StartCoffee";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={StartCoffee} />
          <Route path="/home" component={Home} />
          <Route path="/size" component={CoffeeSize} />
          <Route path="/extra" component={CoffeeExtras} />
          <Route path="/extra-details" component={MilkExtras} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
