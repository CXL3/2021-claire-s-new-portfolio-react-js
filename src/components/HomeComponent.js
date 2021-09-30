import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Home extends Component {
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
        <Card>
          <CardImg top src={project.image} alt={project.name} />
          <CardBody>
            <CardText>{project.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.projects.map(project => {
      return (
        <div key={project.id} className="col-md-5 m-1">
          <Card onClick={() => this.onProjectSelect(project)}>
            <CardImg width="100%" src={project.image} alt={project.name} />
            <CardImgOverlay>
              <CardTitle>{project.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedProject(this.state.selectedProject)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
