import React, { Component } from "react";

import { Card, CardText, CardBody, CardTitle, CardLink } from "reactstrap";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
    };
  }

  onProjectSelect(project) {
    this.setState({ selectedProject: project });
  }

  renderSelectedProject(project) {
    if (project) {
      return (
        <div background_color="#000000">
          <Card>
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
            </CardBody>
            <img with="100%" src={project.image} alt={project.name} />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </div>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.projects.map((project) => {
      return (
        <div key={project.id} className="col-md-5 ">
          <Card>
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
            </CardBody>
            <img with="100%" src={project.image} alt={project.name} />
            <CardBody>
              <CardText>{project.description}</CardText>
              <CardLink href={project.live}>Link</CardLink>
              <CardLink href={project.github1}>Github</CardLink>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div
        className="hero"
        style={{

          padding: 100,
          alignItems: "center",
        }}
      >
        <div className="row">
          <Info />
        </div>

        <div
        >
          {directory}
        </div>
        <div className="row">
          <div className=" col-lg-10 m-1">
            {this.renderSelectedProject(this.state.selectedProject)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;

function Info() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          fontSize: 38,
          ontSize: "5em",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        PROJECTS
      </h1>
    </div>
  );
}
