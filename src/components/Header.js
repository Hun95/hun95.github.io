import React, { useRef, useState } from "react";
import logo from "../images/logo.png";
import { Link } from "gatsby";
import styled from "styled-components";
import { menuData } from "../data/MenuData";

const Header = ({ siteTitle }) => {
  const [color, setColor] = useState();
  const [list, setList] = useState(menuData);

  const mouseOver = () => {
    if (list[0].link === "/tag") {
      setColor("red");

      setTimeout(() => setColor(""), 1100);
    } else {
    }
  };

  return (
    <Nav>
      <NavTitle to="/">
        <LogoImg src={logo} />
        {siteTitle}
      </NavTitle>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavItem
            onMouseOver={mouseOver}
            to={item.link}
            key={index}
            style={{ backgroundColor: color }}
          >
            {item.title}
          </NavItem>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  background-color: #ababab;
  max-width: 100%;
  display: flex;

  position: relative;
  border: none;

  text-decoration: none;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
`;

const NavTitle = styled(Link)`
  color: #fff;

  display: flex;

  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Bar = styled.div``;
const LogoImg = styled.img`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  z-index: 0;
  @media screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const NavItem = styled(Link)`
  justify-content: space-between;
  padding: 0 1rem;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-right: 15px;
  }
  @media screen and (max-width: 500px) {
    margin-right: auto;
    display: none;
  }
`;

const Pop = styled.div`
  width: 50px;
  height: 20px;
  position: relavie;
`;
