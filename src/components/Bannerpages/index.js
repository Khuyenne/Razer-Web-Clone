import React from "react";
import {
  BanContainer,
  ImgWrap1,
  ImgWrap2,
  Img1,
  TopLine1,
  Heading1,
  BanLinks,
  BanText1,
  BanText2,
  BanText3,
  BanText4,
  IconArrow,
  Img2,
  TopLine2,
  Heading2,
} from "./BannerElements";

const Bannerpages = ({
  img1,
  img2,
  alt1,
  alt2,
  topLine1,
  topLine2,
  headLine1,
  headLine2,
  Links1,
  Links2,
  Links3,
  Links4,
}) => {
  return (
    <BanContainer>
      <ImgWrap1>
        <Img1 src={img1} alt={alt1}></Img1>
        <TopLine1>{topLine1}</TopLine1>
        <Heading1>{headLine1}</Heading1>
        <BanLinks>
          <BanText1>
            {Links1}
            <IconArrow />
          </BanText1>

          <BanText2>
            {Links2}
            <IconArrow />
          </BanText2>
        </BanLinks>
      </ImgWrap1>
      <ImgWrap2>
        <Img2 src={img2} alt={alt2}></Img2>
        <TopLine2>{topLine2}</TopLine2>
        <Heading2>{headLine2}</Heading2>
        <BanLinks>
          <BanText3>
            {Links3}
            <IconArrow />
          </BanText3>

          <BanText4>
            {Links4}
            <IconArrow />
          </BanText4>
        </BanLinks>
      </ImgWrap2>
    </BanContainer>
  );
};

export default Bannerpages;
