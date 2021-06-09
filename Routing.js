import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoffeeSize from "./src/components/CoffeeSize/CoffeeSize";

function Routing() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/size" component={CoffeeSize} />
        </Switch>
      </Router>
    </>
  );
}

export default Routing;
