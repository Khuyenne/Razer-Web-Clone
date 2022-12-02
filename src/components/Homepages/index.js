import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  HomepageContainer,
  HPWrapper,
  Column,
  ImgWrap,
  Img,
  TextWrapper,
  TopLine,
  Heading,
  InfoLinks,
} from "./HomepageElements";

const Homepages = ({
  lightBg,
  id,
  topLine,
  lightText,
  headLine,
  informLinks,
  img,
  alt,
}) => {
  return (
    <HomepageContainer lightBg={lightBg} id={id}>
      <HPWrapper>
        <Column>
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <InfoLinks lightText={lightText}>
              {informLinks}
              <MdKeyboardArrowRight />
            </InfoLinks>
          </TextWrapper>
        </Column>
      </HPWrapper>
    </HomepageContainer>
  );
};

export default Homepages;
