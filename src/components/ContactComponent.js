import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container" id="contact" style={{
        marginTop: 60,
        marginBottom: 100,
        
      }}>
        <div className="row">
          <div className=" col-sm-3 text-center">
            <h3>Contact</h3>
            <a
              className="btn btn-social-icon btn-linkedin"
              href="https://www.linkedin.com/in/awslu/"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              className="btn btn-social-icon btn-github"
              href="https://github.com/CXL3"
            >
              <i className="fa fa-github" />
            </a>
            <a
              className="btn btn-social-icon btn-youtube"
              href="https://www.youtube.com/channel/UCOhP-uhVTitdZjoVq1-52AQ"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col-sm-9 text-center ">
            <a
              role="button"
              className="btn btn-link"
              href="tel:+12066795820"
              style={{
                color: "#000000",
              }}
            >
              <i className="fa fa-phone" /> 1-206-679-5820
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:clairelu3@gmail.com"
              style={{
                color: "#000000",
              }}
            >
              <i className="fa fa-envelope-o" /> clairelu3@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
