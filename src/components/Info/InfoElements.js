import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const InfoContainer = styled.div`
  background-color: #222222;
  width: 100%;
  margin: 0px;
  height: 100%;
  overflow: hidden;
`;
export const InfoWrapper = styled.span``;
export const Column = styled.div`
  position: relative;
  width: 100%;
`;
export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.h1`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 0%;
  width: 100%;
  font-size: 47px;
  font-family: "Roboto", sans-serif;

  font-weight: 550;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    top: 3%;
    font-size: 20px;
  }
`;

export const Heading = styled.h2`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 10%;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    top: 15%;
    font-size:  17px;
`;
export const Subtitle = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const InfoLinks = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;

  flex-wrap: wrap;
  padding: 0.5rem 0 0 0;

  z-index: 2;
  color: #fff;
  top: 15%;
  width: 100%;
  @media screen and (max-width: 768px) {
    top: 21%;
    font-size:  15px;

`;

export const InfoText1 = styled.p`
  line-height: normal;
  padding: 0 1rem;
  width: auto !important;
  font-size: 19px; 
  font-family: "RazerF5";
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {

    font-size:  16px;
`;

export const InfoText2 = styled.p`
  line-height: normal;
  padding: 0 1rem;
  width: auto !important;
  font-size: 17px;
  font-family: "RazerF5";
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const ImgWrap = styled.div`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin-top: -85px;
  margin-bottom: -20px;
  @media only screen and (max-width: 46.1875em) {
    width: 1200px;
    margin-left: -310px;
  }
`;
export const IconArrow = styled(MdKeyboardArrowRight)`
  color: #44d62c;
  margin-bottom: -3px;
`;
