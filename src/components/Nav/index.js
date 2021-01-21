import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.webp';
import {
  NavContainer,
  NavTitle,
  LogoImg,
  NavItem,
  NavMenu,
  activeColor,
  LogoTitle,
  Nav,
  MobileNav,
  Button,
  MobileNavModal,
} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuData } from '../../data/MenuData';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isHamburger, setIsHamburger] = useState(true);

  const mobile = useRef();
  const initail = useRef(true);
  useEffect(() => {
    if (initail.current) {
      initail.current = false;

      return;
    }
    if (isHamburger) {
      mobile.current.classList.add('closeAnima');
      mobile.current.classList.remove('openAnima');

      console.log('close');
    } else {
      mobile.current.classList.remove('closeAnima');
      mobile.current.classList.add('openAnima');
      console.log('open');
    }
  }, [isHamburger]);
  return (
    <NavContainer className={`${isHamburger ? 'ModalClose' : ' '} `}>
      <MobileNavModal ref={mobile}></MobileNavModal>
      <Nav space>
        <Link to='/'>
          <LogoImg src={logo} />
        </Link>

        <MobileNav
          transition={isHamburger}
          onClick={() => setIsHamburger(!isHamburger)}
        >
          {isHamburger ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </MobileNav>

        <NavMenu>
          {menuData.map((item, index) => (
            <NavItem
              to={item.link}
              key={index}
              activeStyle={activeColor}
              partiallyActive={true}
            >
              {item.mobileTitle}
            </NavItem>
          ))}
        </NavMenu>
        <Button>Request invite</Button>
      </Nav>
    </NavContainer>
  );
};

export default Header;
