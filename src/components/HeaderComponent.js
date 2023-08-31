import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header
          className='sticky-top'
          style={{
            backgroundColor: '#000000',
            textColor: '#ffffff',
            fontSize: 20,
            padding: 10,
          }}
        >
          <Navbar bg='black' variant='dark' expand='lg' collapseOnSelect>
            <Container>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                  <Nav.Link href='#home'>Home</Nav.Link>
                  <Nav.Link href='#skill'>Skills</Nav.Link>
                  <Nav.Link href='#project'>Projects</Nav.Link>
                  <Nav.Link href='#contact'>Contact</Nav.Link>
                  <Nav.Link href='https://drive.google.com/file/d/1pMyJBAJQTmgVwJ3j5bHZOdwHF4sU43tt/view?usp=share_link'>
                    Resume
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* <nav id='nav-wrap sticky-top '> */}
          {/* <ul id='nav' className='nav'>
              <li className='current'>
                <a
                  className='m-4'
                  style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  href='#home'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className='mr-4'
                  style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  href='#skill'
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className='mr-4'
                  style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  href='#project'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className='mr-4'
                  style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  href='#contact'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className='mr-4'
                  style={{ backgroundColor: '#000000', color: '#ffffff' }}
                  href='https://drive.google.com/file/d/1hM7MMuX8Tcdj5I44tITJhR47O7Oa4AOy/view?usp=sharing'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav> */}
        </header>
      </React.Fragment>
    )
  }
}
