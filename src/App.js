import React from "react";
import PotterState from "./contexts/potter/PotterState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import WizardsMain from "./components/wizards/WizardsMain";
import Wizard from "./components/wizards/Wizard";
import NotFound from "./components/pages/NotFound";
import PotionsMain from "./components/potions/PotionsMain";
import HousesMain from "./components/houses/HousesMain";
import House from "./components/houses/House";
import SortingHatMain from "./components/sortingHat/SortingHatMain";

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
            <Route exact path="/potions" component={PotionsMain} />
            <Route exact path="/wizards/:id" component={Wizard} />
            <Route exact path="/houses" component={HousesMain} />
            <Route exact path="/houses/:id" component={House} />
            <Route exact path="/sortingHat" component={SortingHatMain} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </PotterState>
  );
};

export default App;
