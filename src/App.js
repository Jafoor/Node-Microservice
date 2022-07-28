import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Aboutus from "./Components/Aboutus";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Welcome />
        <Aboutus />
      </div>
    );
  }
}

export default App;
