import React, { useRef, useEffect, useState, useMemo } from 'react';
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
  MobileItem,
  MobileMenu,
  Blur,
} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuData } from '../../data/MenuData';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../context/MainPageProvider';
const Header = () => {
  const [isHamburger, setIsHamburger] = useState({
    boolean: true,
    animation: null,
  });
  const [isHide, setIsHide] = useState(false);
  const outSide = useRef();
  const nav = useRef();
  const { boolean, animation } = isHamburger;
  const handleChange = prevState => {
    setIsHamburger({
      ...prevState,
      boolean: !boolean,
      animation: boolean ? 'yes' : 'no',
    });
  };

  const isOutSide = ({ prevState }) => {
    if (outSide) {
      setIsHamburger({
        ...prevState,
        boolean: !boolean,
        animation: boolean ? 'yes' : 'no',
      });
    }
  };

  const headerChange = () => {
    if (window.pageYOffset >= 10) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', headerChange);
  });
  // useEffect(() => {
  //   if (animation === 'yes') {
  //     document.body.style.overflow = 'hidden';
  //   } else if (animation === 'no') {
  //     document.body.style.overflow = 'auto';
  //   } else if (animation === null) {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [isHamburger]);

  //test here //

  return (
    <>
      <NavContainer
        className={boolean ? 'ModalClose' : ' '}
        ref={nav}
        stick={isHide}
      >
        {/* {isHide && <Blur />} */}
        <MobileNavModal
          ref={outSide}
          onClick={() => isOutSide(isHamburger)}
          open={animation}
        ></MobileNavModal>
        <Nav space>
          <Link to='/'>
            <LogoImg src={logo} />
            <span>수염난친구들</span>
          </Link>

          <MobileNav
            transition={animation}
            onClick={isHamburger => handleChange(isHamburger)}
          >
            {boolean ? <GiHamburgerMenu /> : <AiOutlineClose />}
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
          <Button>함께하기</Button>
        </Nav>
        {!boolean && (
          <MobileMenu>
            {menuData.map((item, index) => (
              <MobileItem to={item.link} key={index}>
                {item.mobileTitle}
              </MobileItem>
            ))}
          </MobileMenu>
        )}
      </NavContainer>
    </>
  );
};

export default Header;
