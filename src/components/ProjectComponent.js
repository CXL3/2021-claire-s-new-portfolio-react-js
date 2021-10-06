import React, { Component } from "react";

import {
  Button,
} from "reactstrap";

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

  // renderSelectedProject(project) {
  //   if (project) {
  //     return (
  //       <div>
  //         <Card>
  //           <CardBody>
  //             <CardTitle>{project.name}</CardTitle>
  //           </CardBody>
  //           <img with="100%" src={project.image} alt={project.name} />
  //           <CardBody>
  //             <CardText>
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </CardText>
  //             <CardLink href="#">Card Link</CardLink>
  //             <CardLink href="#">Another Link</CardLink>
  //           </CardBody>
  //         </Card>
  //       </div>
  //     );
  //   }
  //   return <div />;
  // }

  render() {
    const directory = this.props.projects.map((project) => {
      return (
        <div className="container" key={project.id}>
          <div key={project.id} class="row m-20">
            <div class="col-md-4">
              <h3
                style={{
                  marginLeft: 20,
                  marginBottom: 40,
                  ontSize: "5em",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
                  textAlign: "left",
                }}
              >
                {project.name}
              </h3>

              <div class="col ">
                <p
                  style={{
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {project.description}
                </p>
              </div>
              <div class="col ">
                <h5
                  style={{
                    marginTop: 130,
                    ontSize: "5em",
                    fontStyle: "italic",

                    textAlign: "left",
                  }}
                >
                  {project.frontend}
                </h5>
              </div>
              <div class="col ">
                <h5
                  style={{
                    ontSize: "5em",
                    fontStyle: "italic",

                    textAlign: "left",
                  }}
                >
                  {project.backend}
                </h5>
              </div>
            </div>
            <div class="col-md-8 ml-auto  text-white">
              <div class="row m-20">
                <div class="col-xl-8 m-auto">
                  <img
                    id="pic"
                    style={{
                      alignItems: "center",
                    }}
                    width="100%"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
              </div>
              <div
                class="row "
                style={{
                  marginTop: 20,
                }}
              >
                <div class="col-3 d-flex align-items-stretch ml-auto mt-3">
                  <Button
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      borderRadius: 5,
                      width: 300,
                    }}
                  >
                    <a
                      href={project.live}
                      style={{
                        color: "#000000",
                      }}
                    >
                      VISIT
                    </a>
                  </Button>
                </div>

                <div class="col-3 d-flex align-items-stretch mr-auto mt-3">
                  <Button
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#ffffff",
                      borderRadius: 5,
                      width: 200,
                    }}
                  >
                    <a
                      href={project.github1}
                      style={{
                        color: "#000000",
                      }}
                    >
                      GITHUB
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <hr style={{ width: 800, color: "#ffffff" }}></hr>
          </div>
        </div>
      );
    });

    return (
      <div
        id="project"
        style={{
          padding: 0,
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: 0,
            alignItems: "center",
          }}
        >
          <Info />
        </div>

        <div className="col-12">{directory}</div>
        {/* <div className="row">
          <div className=" col-lg-10 m-1">
            {this.renderSelectedProject(this.state.selectedProject)}
          </div>
        </div> */}
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
          color: "black",
          fontSize: 38,
          ontSize: "5em",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          alignItems: "center",
          padding: 50,
        }}
      >
        PROJECTS
      </h1>
    </div>
  );
}
