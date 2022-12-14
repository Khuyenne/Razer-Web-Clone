import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  padding: 0;
  height: 60px;
  margin: -8px;
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
  padding: 39px 60px 0px 0px;
  color: #999999;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
export const NavLinks = styled(LinkR)`
  color: #999999;
  font-family: "Alumni Sans Pinstripe";
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 70px 0px 0px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
