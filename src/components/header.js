import React, { useState } from "react";
import "../styles/index.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "gatsby";
const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" light expand="lg">
        <div className="container">
          <Link activeStyle={{ color: "red", backgroundColor: "gray" }} to="/">
            {siteTitle}
          </Link>
          <NavbarToggler onClick={toggle} style={{ color: "white" }} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="Navmargin">
                <Link
                  to="/team"
                  activeStyle={{ color: "red" }}
                  partiallyActive={true}
                >
                  팀
                </Link>
              </NavItem>
              <NavItem className="Navmargin">
                <Link to="/tag" activeStyle={{ color: "red" }}>
                  태그
                </Link>
              </NavItem>
              <NavItem className="Navmargin">
                <Link to="/about" activeStyle={{ color: "red" }}>
                  소개
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
