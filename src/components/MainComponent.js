import React, { Component } from "react";
import ProjectCard from "./ProjectComponent";
import Testimonials from "./TestimonialsComponent";
import Contact from "./ContactComponent";
// import About from "./AboutComponent";
// import Project from "./ProjectComponent";
import { PROJECTS } from "../shared/projects";
import { Navbar, NavbarBrand } from "reactstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: PROJECTS, selectedProject: null };
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
        
        <Testimonials />
        <ProjectCard projects={this.state.projects} />
      </div>
    );
  }
}

export default Main;
