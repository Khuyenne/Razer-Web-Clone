import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialWrap,
  SocialIconLink,
  SocialIcons,
  SocialSlogan,
  Arrowright,
  Footerbottom,
  FooterInfo,
  FooterInfoLink,
  FooterCountry,
  FooterCounInfo,
  FooterCounLink,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Shop</FooterLinkTitle>
              <FooterLink to="/">RazerStores</FooterLink>
              <FooterLink to="/">RazerCafe</FooterLink>
              <FooterLink to="/">Store Locator</FooterLink>
              <FooterLink to="/">Purchase Programs</FooterLink>
              <FooterLink to="/">Education</FooterLink>
              <FooterLink to="/">Exclusives</FooterLink>
              <FooterLink to="/">RazerStore Rewards</FooterLink>
              <FooterLink to="/">Newsletter</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Explore</FooterLinkTitle>
              <FooterLink to="/">Technology</FooterLink>
              <FooterLink to="/">Chroma RGB</FooterLink>
              <FooterLink to="/">Concepts</FooterLink>
              <FooterLink to="/">Esports</FooterLink>
              <FooterLink to="/">Collabs</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLink to="/">Get Help</FooterLink>
              <FooterLink to="/">Registration & Warranty</FooterLink>
              <FooterLink to="/">RazerStore Support</FooterLink>
              <FooterLink to="/">RazerCare</FooterLink>
              <FooterLink to="/">Manage Razer ID</FooterLink>
              <FooterLink to="/">Support Videos</FooterLink>
              <FooterLink to="/">Accessibility Statement</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Press Room</FooterLink>
              <FooterLink to="/">zVentures</FooterLink>
              <FooterLink to="/">Contact Us</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <SocialMedia>
            <SocialWrap>
              <SocialSlogan>FOR GAMERS BY GAMERS</SocialSlogan>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <img src="/iconsocial/facebook.svg" alt="fb" />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  arial-label="Instagram"
                >
                  <img src="/iconsocial/instagram.svg" alt="insta" />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                  <img src="/iconsocial/twitter.svg" alt="twitter" />
                </SocialIconLink>
              </SocialIcons>
            </SocialWrap>
          </SocialMedia>
        </FooterLinkContainer>
      </FooterWrap>
      <hr width={1000} color={999999} />
      <Footerbottom>
        <copyRight>Copyright © 2022 Razer Inc. All rights reserved.</copyRight>
        <FooterInfo>
          <FooterInfoLink>Site Map</FooterInfoLink>
          <FooterInfoLink>|</FooterInfoLink>
          <FooterInfoLink>Legal Terms</FooterInfoLink>
          <FooterInfoLink>|</FooterInfoLink>
          <FooterInfoLink>Privacy Policy</FooterInfoLink>
          <FooterInfoLink>|</FooterInfoLink>
          <FooterInfoLink>Cookie Policy</FooterInfoLink>
        </FooterInfo>
        <FooterCountry>
          <FooterCounInfo>United States |</FooterCounInfo>

          <FooterCounLink to="/">
            Change Location <Arrowright />
          </FooterCounLink>
        </FooterCountry>
      </Footerbottom>
    </FooterContainer>
  );
};

export default Footer;
