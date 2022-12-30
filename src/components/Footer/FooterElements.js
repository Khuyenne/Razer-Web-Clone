import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #000000;
  line-height: 24px;
  margin: 40px 0 -10px -10px;
  width: 100.95%;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 26px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  font-family: "Roboto";
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 12px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #999999;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 12px;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const SocialMedia = styled.section``;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin: 11px;

  box-sizing: border-box; ;
`;
export const SocialSlogan = styled.h1`
  color: #44d62c;
  font-size: 14.4px;
`;
export const SocialIcons = styled(Link)`
  display: flex;
  justify-content: right;
`;
export const SocialIconLink = styled.div`
  background-size: contain;
  font-size: 12px;
  line-height: 12px;
  margin: 0px 5px;
  text-align: right;
`;

// export const endLine = styled.hr`
//   color: #999999;
// `;
export const Footerbottom = styled.div`
  color: #999999;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FooterInfo = styled.div`
  display: flex;
  margin-right: 1.6rem;
`;
export const copyRight = styled.span`
  display: flex;
`;
export const FooterInfoLink = styled.ul`
  display: flex;
  margin-left: 6px;
`;
export const FooterCountry = styled.div`
  display: flex;
`;
export const FooterCounInfo = styled.p`
  display: flex;
  font-size: 12px;
  color: #fff;
  margin-right: 0.2rem;
`;
export const FooterCounLink = styled(Link)`
  display: flex;
  color: #999999;
  margin-top: 0.68rem;
  text-decoration: none;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const Arrowright = styled(MdKeyboardArrowRight)`
  margin-top: 0.3rem;
`;
