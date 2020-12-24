import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "gatsby";
import styled from "styled-components";
import { menuData } from "../data/MenuData";

const Header = ({ siteTitle }) => {
  const [color, setColor] = useState();
  const [list, setList] = useState(menuData);
  const age = list.filter(links => {
    if (links.link === "/tag") {
      return links.title;
    }
  });

  // console.log(age);
  // const mouseOver = () => {
  //   if (age[0]) {
  //     setColor("red");

  //     setTimeout(() => setColor(""), 1100);
  //   } else if (age[1]) {
  //     setColor("blue");

  //     setTimeout(() => setColor(""), 1100);
  //   } else if (age[2]) {
  //     setColor("black");

  //     setTimeout(() => setColor(""), 1100);
  //   }
  // };

  return (
    <Nav>
      <NavTitle to='/'>
        <LogoImg src={logo} />
        {siteTitle}
      </NavTitle>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavItem
            onClick={age}
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
  background-color: #ffffff;
  max-width: 100%;
  display: flex;

  position: relative;
  border: none;
  box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);
  text-decoration: none;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
`;

const NavTitle = styled(Link)`
  color: #000;

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
