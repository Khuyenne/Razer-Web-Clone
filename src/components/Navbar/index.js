import React, { useState, useEffect } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";

// import { animateScroll as scroll } from "react-scroll";
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
  NavNames,
  SearchIconbutton,
  ShoppingCartIcon,
  // SearchWapper,
  // SearchInput,
  // Closebutton,
  // CloseIcon,

  // SearchIcon,
} from "./NavbarElements";

const Navbar = ({ isOpen, toggle }) => {
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
    window.location.href = "/";
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
            <ShoppingCartIcon />
          </MobileIcon2>
          <NavMenu>
            <NavItem>
              <NavLinks>
                <NavNames to="pc">PC</NavNames>
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
                <NavNames to="store">Store</NavNames>
              </NavLinks>
              <NavBtnLink>
                {/* <SearchIconbutton type="a" to="#search" className="button">
                  <SearchWapper id="search">
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
                  </SearchWapper>
                </SearchIconbutton> */}

                <SearchIconbutton />

                {/* <SearchIconbutton onClick={setIcon}>
                  <div class="search-container">
                    <form action="/search" method="get">
                      <input
                        className="search"
                        id="searchleft"
                        type="search"
                        name="q"
                        placeholder="Search"
                      />
                      <label className="button searchbutton" for="searchleft">
                        <span class="mglass">&#9906;</span>
                      </label>
                    </form>
                  </div>
                </SearchIconbutton> */}
              </NavBtnLink>
              <NavBtnLink to="/">
                <ShoppingCartIcon />
              </NavBtnLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
