import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { RiVipDiamondLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
// import { AiOutlineClose } from "react-icons/ai";
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  padding: 0;
  height: 60px;
  margin: 0px;
  margin-top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #44d62c;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px 351.5px;
  line-height: 24px;
  z-index: 1;
  width: 100%;
  padding: 0px;
  max-width: 1100px;
`;
export const NavLogo = styled.div`
  cursor: pointer;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const MobileIcon1 = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 20;
    transform: translate(-700%, 60%);
    font-size: 1.9rem;
    color: #fff;
  }
`;
export const MobileIcon2 = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  align-items: flex-end;
  margin-right: -160px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  padding: 30px;
  margin: 0 45px;
  height: 100px;
  display: flex;
`;

export const NavBtnLink = styled.div`
  white-space: nowrap;
  padding: 40px 60px 0px 0px;
  color: #999999;
  font-size: 18px;
`;
export const NavLinks = styled.div`
  color: #999999;
  font-family: "Alumni Sans Pinstripe";
  display: flex;
  align-items: center;

  padding: 15px 70px 0px 0px;
  height: 100%;
  cursor: pointer;
`;
export const NavNames = styled(LinkR)`
  color: #999999;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const SearchIconbutton = styled(AiOutlineSearch)`
  display: flex;
  margin-top: -20px;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

export const ShoppingCartIcon = styled(CgShoppingCart)`
  text-decoration: none;
  margin-top: -50px;
  &:hover {
    color: #fff;
  }
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  position: fixed;

  left: 81%;
  opacity: ${({ isActive }) => (isActive ? "100%" : "0")};
  // width: ${({ isActive }) => (isActive ? "0" : "10%")};
`;

export const SCWrapper = styled.div`
  background: #222;
  border: 2px solid #555;
  border-radius: 0.625rem;
  left: auto;
  margin: 0 0.175rem;
  max-width: 18rem;
  min-width: 18rem;
  position: absolute;
  right: -1rem;
  top: -5px;
  z-index: 2;
`;

export const SCtooltip = styled.div`
  background: url(https://www.razer.com/assets/images/icons/bg-arrow-pointer-new.png);
  background-repeat: no-repeat 50%;
  display: block;
  height: 15px;
  position: absolute;
  right: 1.2rem;
  top: -15px;
  width: 28px;
`;

export const SCMessage = styled.div`
  border-bottom: 1px solid #555;
  color: #888;
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  margin: 0 1.25rem;
  padding: 1.5rem 0;
  text-align: center;
  box-sizing: border-box;
`;

export const SCul = styled.ul`
  margin: 0.1rem 0;
  padding: 0 1.25rem;
  list-style: none;
`;

export const Scli = styled.li`
  display: flex;
  border-top: 0 solid transparent;
  border-bottom: 1px solid #555;
  font-family: RazerF5;
  font-size: 14px;
  font-weight: 300;
  justify-content: flex-start;
  line-height: 21px;
  padding: 8.4px 0px 3.2px;
  text-align: left;
`;

export const SCCart = styled.div`
  display: flex;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    filter: invert(10%) sepia(64%) saturate(640%) hue-rotate(54deg) brightness(89%) contrast(88%);
`;

export const SCOrd = styled.div`
  display: flex;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    filter: invert(10%) sepia(64%) saturate(640%) hue-rotate(54deg) brightness(89%) contrast(88%);
`;

export const SCAcc = styled.div`
  display: flex;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    filter: invert(10%) sepia(64%) saturate(640%) hue-rotate(54deg) brightness(89%) contrast(88%);
`;

export const SCReward = styled.div`
display: flex;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    filter: invert(10%) sepia(64%) saturate(640%) hue-rotate(54deg) brightness(89%) contrast(88%);`;

export const SCLogin = styled.div`
display: flex;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    filter: invert(10%) sepia(64%) saturate(640%) hue-rotate(54deg) brightness(89%) contrast(88%);`;

export const Cartimg = styled(CgShoppingCart)`
  display: inline-flex;
  font-size: 20px;
  font-weight: 300;
  line-height: 21px;
  padding: 0px 10px 0px 0px;
  text-align: left;
  &:hover {
    color: #44d62c;
  }
`;

export const Ordimg = styled.img`
  display: inline-flex;
  font-size: 20px;
  font-weight: 200;
  line-height: 21px;
  padding: 0px 10px 0px 0px;
  text-align: left;
  &:hover {
    filter: invert(10%) sepia(64%) saturate(640%) hue-rotate(54deg) brightness(89%) contrast(88%);
`;

export const Accimg = styled.img`
  display: inline-flex;
  font-size: 20px;
  font-weight: 200;
  line-height: 21px;
  padding: 0px 10px 0px 0px;
  text-align: left;
`;

export const Rewardsicon = styled(RiVipDiamondLine)`
  display: inline-flex;
  font-size: 20px;
  font-weight: 200;
  line-height: 21px;
  padding: 0px 10px 0px 0px;
  text-align: left;
`;

export const LogIcon = styled(MdLogin)`
  display: inline-flex;
  font-size: 20px;
  font-weight: 200;
  line-height: 21px;
  padding: 0px 10px 0px 0px;
  text-align: left;
`;
