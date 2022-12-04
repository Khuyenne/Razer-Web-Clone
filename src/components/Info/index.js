import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  InfoLinks1,
  InfoLinks2,
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
          <ImgWrap>
            <Img src={img} alt={alt} />
          </ImgWrap>
          <TextWrapper>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle lightText={lightText}>{description}</Subtitle>
            <InfoLinks1 lightText={lightText}>
              {informLinks1}
              <IconArrow />
            </InfoLinks1>
            <InfoLinks2 lightText={lightText}>
              {informLinks2}
              <IconArrow />
            </InfoLinks2>
          </TextWrapper>
        </Column>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
