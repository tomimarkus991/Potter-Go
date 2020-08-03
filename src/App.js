import React from "react";
import PotterState from "./contexts/potter/PotterState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";

const App = () => {
  return (
    <PotterState>
      <BrowserRouter>
        <Navbar />
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </PotterState>
  );
};

export default App;
