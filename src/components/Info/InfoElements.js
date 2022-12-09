import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const InfoContainer = styled.div`
  background-color: #222222;
  width: 100%;

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
  top: -5%;
  width: 100%;
  font-size: 47px;
  font-family: "Roboto", sans-serif;

  font-weight: 550;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    top: 0%;
    font-size: 21px;
  }
`;

export const Heading = styled.h2`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 6%;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    top: 8%;
    font-size:  17px;
`;
export const Subtitle = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const InfoLinks1 = styled.p`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 12%;
  width: 100%;
  font-size: 19px;
  font-family: "RazerF5";
  right: 4%;
  @media screen and (max-width: 768px) {
    top: 12%;
    font-size: 16px;
`;
export const InfoLinks2 = styled.p`
position: absolute;
  text-align: center;
  color: #fff;
  top: 12%;
  width: 100%;
  font-family: "RazerF5";
  font-size: 19px;
  left:4%;
  @media screen and (max-width: 768px) {
    top: 12%;
    font-size: 16px;`;

export const ImgWrap = styled.div`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin-top: -85px;
  margin-bottom: -20px;
  @media screen and (max-width: 768px) {
  }
`;
export const IconArrow = styled(MdKeyboardArrowRight)`
  color: #44d62c;
  margin-bottom: -3px;
`;
