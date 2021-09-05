import React, { Component } from "react";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Project from "./ProjectComponent";
import { Navbar, NavbarBrand } from "reactstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="white">
          <div className="container">
            <NavbarBrand id="Nav" href="/">
              Claire's Portfolio
            </NavbarBrand>
          </div>
        </Navbar>
        <Home />
        <Contact />
        <About />
        <Project />
      </div>
    );
  }
}

export default Main;
