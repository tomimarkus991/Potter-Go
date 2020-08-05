import React from "react";
import PotterState from "./contexts/potter/PotterState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import WizardsMain from "./components/wizards/WizardsMain";
import Wizard from "./components/wizards/Wizard";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <PotterState>
      <BrowserRouter>
        <Navbar />
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/wizards" component={WizardsMain} />
            <Route exact path="/wizards/:id" component={Wizard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </PotterState>
  );
};

export default App;
