import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  InfoLinks,
  InfoText1,
  InfoText2,
  ImgWrap,
  Img,
  IconArrow,
} from "./InfoElements";

const Info = ({
  lightBg,
  id,
  topLine,
  lightText,
  headLine,
  description,
  informLinks1,
  informLinks2,
  img,
  alt,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <Column>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle lightText={lightText}>{description}</Subtitle>
            <InfoLinks lightText={lightText}>
              <InfoText1>
                {informLinks1}
                <IconArrow />
              </InfoText1>

              <InfoText2>
                {informLinks2}
                <IconArrow />
              </InfoText2>
            </InfoLinks>
          </TextWrapper>
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
        </Column>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
