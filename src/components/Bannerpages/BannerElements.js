import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const BanContainer = styled.div`
  background-color: #222222;
  display: flex;
  overflow: hidden;
  margin: 40px -8px -40px -10px;
`;
export const ImgWrap1 = styled.div`
  position: relative;
`;

export const Img1 = styled.img`
  width: 99%;
  height: 99%;

  // margin-right: -10px;
`;
export const TopLine1 = styled.h1`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 5%;
  width: 100%;
  font-size: 35px;
  font-family: "Roboto", sans-serif;
  font-weight: 550;
  letter-spacing: 1.4px;
`;

export const Heading1 = styled.h2`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 12%;
  width: 100%;
  font-size: 28px;
  font-family: "Roboto", sans-serif;

  font-weight: 390;
  letter-spacing: 1px;
`;

export const BanText1 = styled.p`
  font-size: 17px;
  font-family: "RazerF5";
  line-height: normal;
  padding: 0 1rem;
  width: auto !important;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const BanText2 = styled.p`
  font-size: 17px;
  font-family: "RazerF5";
  font-weight: 300;
  line-height: normal;
  padding: 0 1rem;
  width: auto !important;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const IconArrow = styled(MdKeyboardArrowRight)`
  color: #44d62c;
  margin-bottom: -3px;
`;

export const ImgWrap2 = styled.div`
  position: relative;
`;

export const Img2 = styled.img`
  width: 99%;
  height: 99%;
`;

export const TopLine2 = styled.h1`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 5%;
  width: 100%;
  font-size: 37px;
  font-family: "Roboto", sans-serif;

  font-weight: 550;
  letter-spacing: 1.4px;
`;
export const Heading2 = styled.h2`
  position: absolute;
  text-align: center;
  color: #fff;
  top: 13%;
  width: 100%;
  font-size: 28px;
  font-family: "Roboto", sans-serif;

  font-weight: 390;
  letter-spacing: 1px;
`;
export const BanLinks = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  text-align: center;
  color: #fff;
  width: 100%;
  top: 23%;
`;
export const BanText3 = styled.p`
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
export const BanText4 = styled.p`
  font-weight: 300;
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
