import styled from "styled-components";

import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #000000;
  line-height: 24px;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
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
  }
`;

export const SocialMedia = styled.section``;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin: 12px;

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
