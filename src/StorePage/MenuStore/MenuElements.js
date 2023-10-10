import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const MenuContainer = styled.div`
  background: #000000;
  margin: 0;
  width: 100%;
`;
export const MenuMain = styled.div`
  line-height: 24px;
  margin: 0px 335.5px;
  padding: 30px 0px 0px;
`;
export const MenuNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 24px;
  margin: 0px 36px;
  margin-left: -40px;
`;
export const NavItems = styled.div``;
export const MenuLinks = styled(LinkR)`
  color: #eeeeee;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #44d62c;
  }
`;
export const MenuNavRowTop = styled.div`
  margin: 0;
  padding: 4rem 1rem 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`;
export const MenuHeading = styled.h1`
  width: 87%;
  color: #eeeeee;
  font-family: RazerF5, sans-serif;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const MenuText1 = styled.h2`
  font: normal normal bold 40px/48px RazerF5, sans-serif;
  letter-spacing: 0px;
  color: #44d62c;
  text-transform: uppercase;
`;
export const MenuText2 = styled.h3`
  color: #eeeeee;
  font-size: 22px;
  font-weight: 700;
  line-height: 0px;
  letter-spacing: -0.5px;
  margin-top: 18px;
  margin-left: 5px;
`;
export const MenuSide = styled.div`
  display: flex;
  font: normal normal normal 14px/17px Roboto, sans-serif;
  color: #eeeeee;
  align-self: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  flex: 1;
`;
export const SideLink = styled.p`
  color: #eeeeee;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  padding: 0 0.5rem;

  // width: 150px;
`;
export const IconArrow = styled(MdKeyboardArrowRight)`
  color: #44d62c;
  margin-bottom: -1px;
`;
