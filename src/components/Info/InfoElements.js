import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div``;
export const Column = styled.div``;
export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 32px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
  text-align: center;
  font-family: "Italic";
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 50px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

export const InfoLinks1 = styled.p`
  text-align: center;
`;
export const InfoLinks2 = styled.p``;

export const ImgWrap = styled.div`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
