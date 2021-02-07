import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }
  
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  
  render() {
    return (
      <Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav}/>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Ristorante con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
            </div>
          </div>
        </Jumbotron>
      </Fragment>
    );
  };
}

export default Header;