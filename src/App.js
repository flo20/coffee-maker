import React from "react";
import Cappuccino from "./components/Cappuccino/Cappuccino";
import Espresso from "./components/Espresso/Espresso";
import Ristretto from "./components/Ristretto/Ristretto";

function App() {
  return (
    <div>
      <Cappuccino />
      <Ristretto />
      <Espresso />
    </div>
  );
}

export default App;
