import React, { useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { RiVipDiamondLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
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
  // ShoppingCartContainer,
  // SCWrapper,
  // SCtooltip,
  // SCMessage,
  // SCul,
  // Scli,
  // SCCart,
  // SCOrd,
  // SCAcc,
  // SCReward,
  // SCLogin,
  // Cartimg,
  // Ordimg,
  // Accimg,
  // Rewardsicon,
  // LogIcon,
} from "./NavbarElements";
import "./NavbarElements.css";
import { CgShoppingCart } from "react-icons/cg";
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
  const dropdownLinks = document.querySelectorAll(".dropdown-content a");

  // Add a click event listener to each link
  dropdownLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
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
            <ShoppingCartIcon onClick={toggleCart} />
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
                <SearchIconbutton onClick={toggle}></SearchIconbutton>
              </NavBtnLink>
              <NavBtnLink></NavBtnLink>
              <NavBtnLink>
                <div class="dropdown">
                  <button class="dropbtn">
                    <CgShoppingCart className="icongrey" />
                  </button>
                  <div class="dropdown-content">
                    <div className="toolTip"></div>
                    <div className="messageS">Your cart is empty</div>
                    <ul className="ulS">
                      <li className="liS">
                        <div className="cartS">
                          <CgShoppingCart className="iconSC" />
                          Cart
                        </div>
                      </li>
                      <li className="liS">
                        <div className="orderS">
                          <img
                            src="https://www.razer.com/assets/images/icons/orders_icon.svg"
                            alt="ord"
                            className="iconSC"
                            width={20}
                            height={16}
                          />
                          Order
                        </div>
                      </li>
                      <li className="liS">
                        <div className="accountS">
                          <img
                            src="https://www.razer.com/assets/images/icons/account-icon.svg"
                            alt="accou"
                            className="iconSC"
                          />
                          Account
                        </div>
                      </li>
                      <li className="liS">
                        <div className="reward">
                          <RiVipDiamondLine className="iconSC" />
                          RazerStore Rewards
                        </div>
                      </li>
                      <li className="liS">
                        <div className="loginS">
                          <MdLogin className="iconSC" />
                          Login
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </NavBtnLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
