import React, { Component } from "react";
import ProjectCard from "./ProjectComponent";
import Testimonials from "./TestimonialsComponent";
import Skill from "./SkillComponent";
import Header from "./HeaderComponent";
import { PROJECTS } from "../shared/projects";
// import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: PROJECTS, selectedProject: null };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Testimonials />
        <Skill />
        <ProjectCard projects={this.state.projects} />
      </div>
    );
  }
}

export default Main;
