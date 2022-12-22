import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const MenuContainer = styled.div`
  background: #000000;
  margin: -4px -8px 0px -7.6px;
`;
export const MenuMain = styled.div`
  line-height: 24px;
  margin: 0px 335.5px;
  padding: 40px 0px 0px;
`;
export const MenuNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 24px;
  margin: 0px 16px;
`;
export const NavItems = styled.div``;
export const MenuLinks = styled.h2`
  color: #eeeeee;
  font-size: 14px;
`;
export const MenuNavRowTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 24px;
  padding: 40px 16px 0px 24px;
`;
export const MenuHeading = styled.h1`
  color: #eeeeee;
  font-family: RazerF5, sans-serif;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const MenuText1 = styled.h2`
  color: #44d62c;
  font-size: 30px;
  font-weight: 700;
`;
export const MenuText2 = styled.h2`
  color: #eeeeee;
  font-size: 20px;
  font-weight: 600;
  line-height: 0px;
  letter-spacing: -0.5px;
  margin-top: -10px;
`;
export const MenuSide = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 0rem;
  max-width: 190px;
  padding: 50px 172px;
`;
export const SideLink = styled.p`
  color: #eeeeee;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  padding: 0 0.5rem;
  margin: 0 0.2rem;
`;
export const IconArrow = styled(MdKeyboardArrowRight)`
  color: #44d62c;
  margin-bottom: -3px;
`;
