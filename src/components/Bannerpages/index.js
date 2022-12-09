import React from "react";
import {
  BanContainer,
  ImgWrap1,
  ImgWrap2,
  Img1,
  TopLine1,
  Heading1,
  BanLinks1,
  BanLinks2,
  BanLinks3,
  BanLinks4,
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
        <BanLinks1>
          {Links1}
          <IconArrow />
        </BanLinks1>
        <BanLinks2>
          {Links2}
          <IconArrow />
        </BanLinks2>
      </ImgWrap1>
      <ImgWrap2>
        <Img2 src={img2} alt={alt2}></Img2>
        <TopLine2>{topLine2}</TopLine2>
        <Heading2>{headLine2}</Heading2>
        <BanLinks3>
          {Links3}
          <IconArrow />
        </BanLinks3>
        <BanLinks4>
          {Links4}
          <IconArrow />
        </BanLinks4>
      </ImgWrap2>
    </BanContainer>
  );
};

export default Bannerpages;
