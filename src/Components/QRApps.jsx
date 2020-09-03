import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Generator from "./Contents/Generator/Generator";
import About from "./Contents/About/About";

export default class QRGeneratorApps extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Generator />
            </Route>
        </Switch>
    </Router>
    );
  }
}
