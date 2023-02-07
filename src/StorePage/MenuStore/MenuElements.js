import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

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
export const MenuLinks = styled.h2`
  color: #eeeeee;
  font-size: 14px;
`;
export const MenuNavRowTop = styled.div`
  display: flex;

  line-height: 24px;
  padding: 35px 0px 0px 0px;
`;
export const MenuHeading = styled.h1`
  color: #eeeeee;
  font-family: RazerF5, sans-serif;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const MenuText1 = styled.h2`
  color: #44d62c;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin-left: 12px;
  margin-top: 30px;
`;
export const MenuText2 = styled.h3`
  color: #eeeeee;
  font-size: 20px;
  font-weight: 700;
  line-height: 0px;
  letter-spacing: -0.5px;
  margin-top: 18px;
  margin-left: 12px;
`;
export const MenuSide = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 2.2rem;

  padding: 20px;
  padding-left: 400px;
`;
export const SideLink = styled.p`
  color: #eeeeee;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  padding: 0 1rem;

  // width: 150px;
`;
export const IconArrow = styled(MdKeyboardArrowRight)`
  color: #44d62c;
  margin-bottom: -1px;
`;
