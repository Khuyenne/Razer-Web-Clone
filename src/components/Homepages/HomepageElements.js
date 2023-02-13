import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const HomepageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222222;

  margin: 0px 0px 0px 0px;
`;
export const HPWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Column = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.h1`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 5%;
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
  top: 15%;
  width: 100%;
  font-size: 26px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    top: 8%;
    font-size:  17px;
`;

export const InfoLinks = styled.p`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 21%;
  width: 100%;
  font-size: 19px;
  font-family: "Roboto", sans-serif;
  
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    top: 12%;
    font-size: 16px;
`;

export const ImgWrap = styled.div``;
export const Img = styled.img`
  width: 100%;
`;
export const IconArrow = styled(MdKeyboardArrowRight)`
  color: #44d62c;
  margin-bottom: -3px;
`;
