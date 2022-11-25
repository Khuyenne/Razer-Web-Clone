import React from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
// import razerLogo from "./logo.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src="/logo.svg" alt="logo" height={50} width={50} />
          </NavLogo>
          <MobileIcon>
            <HiOutlineBars2 />
          </MobileIcon>
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
