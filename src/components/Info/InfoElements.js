import styled from "styled-components";

export const InfoContainer = styled.div``;
export const InfoWrapper = styled.div``;
export const Column = styled.div`
  position: relative;
  width: 100%;
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
  font-size: 32px;
  font-family: "Roboto", sans-serif;

  font-weight: 800;
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
  font-size: 22px;
  font-family: "Roboto", sans-serif;
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
  top: 25%;
  width: 100%;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    top: 12%;
    font-size: 16px;
`;
export const InfoLinks2 = styled.p``;

export const ImgWrap = styled.div``;
export const Img = styled.img`
  @media screen and (max-width: 768px) {
  }
`;
