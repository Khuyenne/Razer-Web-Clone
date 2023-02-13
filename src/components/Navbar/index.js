import React, { useState } from "react";
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
  ShoppingCartContainer,
  SCWrapper,
  SCtooltip,
  SCMessage,
  SCul,
  Scli,
  SCCart,
  SCOrd,
  SCAcc,
  SCReward,
  SCLogin,
  Cartimg,
  Ordimg,
  Accimg,
  Rewardsicon,
  LogIcon,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  // const [scrollNav, setScrollNav] = useState(false);
  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);
  const [isActive, setIsActive] = useState(false);
  const toggleCart = () => {
    setIsActive(!isActive);
  };
  const toggleHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src="/logo.svg" alt="logo" height={35} width={35} />
          </NavLogo>
          <MobileIcon1>
            <HiOutlineBars2 />
          </MobileIcon1>
          <MobileIcon2>
            <ShoppingCartIcon />
          </MobileIcon2>
          <NavMenu>
            <NavItem>
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
              </NavBtnLink>
              <NavBtnLink>
                <ShoppingCartIcon onClick={toggleCart} />
                <ShoppingCartContainer isActive={isActive} onClick={toggleCart}>
                  <SCWrapper>
                    <SCtooltip></SCtooltip>
                    <SCMessage>Your Cart is empty.</SCMessage>
                    <SCul>
                      <Scli>
                        <SCCart to="cart">
                          <Cartimg />
                          Cart
                        </SCCart>
                      </Scli>
                      <Scli>
                        <SCOrd to="order">
                          <Ordimg
                            src="https://www.razer.com/assets/images/icons/orders_icon.svg"
                            alt="ord"
                            width={20}
                            height={16}
                          />
                          Orders
                        </SCOrd>
                      </Scli>
                      <Scli>
                        <SCAcc to="account">
                          <Accimg
                            src="https://www.razer.com/assets/images/icons/account-icon.svg"
                            alt="accou"
                          />
                          Account
                        </SCAcc>
                      </Scli>
                      <Scli>
                        <SCReward to="reward">
                          <Rewardsicon />
                          RazerStore Rewards
                        </SCReward>
                      </Scli>
                      <Scli>
                        <SCLogin to="login">
                          <LogIcon />
                          Log In
                        </SCLogin>
                      </Scli>
                    </SCul>
                  </SCWrapper>
                </ShoppingCartContainer>
              </NavBtnLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
