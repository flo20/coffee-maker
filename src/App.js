import React from "react";
// import Cappuccino from "./components/Cappuccino/Cappuccino";
// import Espresso from "./components/Espresso/Espresso";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ristretto from "./components/Ristretto/Ristretto";
import CoffeeSize from "./components/CoffeeSize/CoffeeSize";

function App() {
  return (
    <div>
      {/* <Cappuccino /> */}
      <Ristretto />
      {/* <Espresso /> */}

      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/size" component={CoffeeSize} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
