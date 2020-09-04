import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Generator from "./Contents/Generator/Generator";
import Page from "./Contents/About/About";

export default class QRGeneratorApps extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route path="/about">
                <Page title="About" body="QR Code Generator is an application created using the javascript programming language (ReactJS), and by utilizing the API from QRTag." />
            </Route>
            <Route path="/how-to-use">
              <Page title="How to use" body="Easy to use, Fast, and Simple. just input text or url in the input form, you are free to input whatever you want. Below the input form there is a size setting for the QR code that you generated. You are free to replace it (minimum 4, maximum 7). every time you change data on the input form or on the size, the QR Code will automatically change or generate itself. for fast or long the QR Code responds depending on your internet speed. the faster your internet is, the faster the QR Code will be generated." />
            </Route>
            <Route path="/">
                <Generator />
            </Route>
        </Switch>
    </Router>
    );
  }
}
