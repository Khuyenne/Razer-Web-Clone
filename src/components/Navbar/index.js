import React, { useState, useEffect } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon1,
  MobileIcon2,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src="/logo.svg" alt="logo" height={35} width={35} />
          </NavLogo>
          <MobileIcon1 onClick={toggle}>
            <HiOutlineBars2 />
          </MobileIcon1>
          <MobileIcon2 onClick={toggle}>
            <CgShoppingCart />
          </MobileIcon2>
          <NavMenu>
            <NavItem>
              <NavLinks to="pc">PC</NavLinks>
              <NavLinks to="console">Console</NavLinks>
              <NavLinks to="mobile">Mobile</NavLinks>
              <NavLinks to="lifestyle">Lifestyle</NavLinks>
              <NavLinks to="services">Services</NavLinks>
              <NavLinks to="community">Community</NavLinks>
              <NavLinks to="support">Support</NavLinks>
              <NavLinks to="store">Store</NavLinks>
              <NavBtnLink to="search">
                <AiOutlineSearch />
              </NavBtnLink>
              <NavBtnLink to="shoppingcart">
                <CgShoppingCart />
              </NavBtnLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
