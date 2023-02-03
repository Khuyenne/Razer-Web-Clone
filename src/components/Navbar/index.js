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
<<<<<<< Updated upstream
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
=======
              <NavLinks>
                <NavNames to="store">Store</NavNames>
              </NavLinks>
              <NavLinks>
                <NavNames to="console">Console</NavNames>
              </NavLinks>
              <NavLinks>
                <NavNames to="mobile">Mobile</NavNames>
              </NavLinks>
              <NavLinks>
                <NavNames to="lifestyle">Lifestyle</NavNames>
              </NavLinks>
              <NavLinks>
                <NavNames to="services">Services</NavNames>
              </NavLinks>
              <NavLinks>
                <NavNames to="community">Community</NavNames>
              </NavLinks>
              <NavLinks>
                <NavNames to="support">Support</NavNames>
              </NavLinks>
              <NavLinks>
                <NavNames to="pc">PC</NavNames>
              </NavLinks>
              <NavBtnLink>
                <SearchIconbutton onClick={toggle}>
                  {/* <SearchWapper id="search">
                    <SearchInput type={"text"} placeholder="Search razer.com" />

                    <Closebutton>
                      <CloseIcon
                        to="/"
                        aria-label="Close alert"
                        type="button"
                        data-close
                      >
                        Close
                      </CloseIcon>
                    </Closebutton>
                  </SearchWapper> */}
                </SearchIconbutton>
>>>>>>> Stashed changes
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
